/* eslint-disable no-undef */
'use strict'

const imagemagick = require('imagemagick')

const EmailConfirmation = use('App/Models/EmailConfirmation')
const { validateAll } = use('Validator')
const { v4: uuidv4 } = require('uuid')

const Event = use('Event')
const Helpers = use('Helpers')
const sha256 = require('sha256')

class ProfileController {
  async update({ request, auth, response }) {
    try {
      const data = request.only([
        'first_name',
        'last_name',
        'username',
        'email',
        'password',
      ])

      const rules = {
        email: 'email|unique:users,email',
        username: 'unique:users,username',
        password: 'min:6|confirmed',
        first_name: 'min:2',
        last_name: 'min:2',
      }

      const validation = await validateAll(request.all(), rules)

      if (validation.fails()) {
        return response.status(400).send(validation.messages())
      }

      const user = await auth.getUser()

      const avatar = request.file('avatar', {
        types: ['image'],
        size: '3mb',
      })

      if (avatar) {
        const name = `${uuidv4()}.${avatar.subtype}`

        await avatar.move(Helpers.publicPath('images/avatar'), {
          overwrite: true,
          name,
        })

        if (!avatar.moved()) {
          return response.status(400).send({
            status: 'error',
            message: avatar.error().message,
          })
        }

        await imagemagick.resize({
          srcPath: Helpers.publicPath(`images/avatar/${name}`),
          dstPath: Helpers.publicPath(`images/avatar/${name}`),
          width: 100,
        })

        user.avatar = '/images/avatar/' + name
        await user.save()
        return response.status(200).send({
          status: 'success',
          message: 'Your avatar has been updated',
        })
      }

      if (data.email) {
        try {
          const confirmation = await EmailConfirmation.create({
            user_id: user.toJSON().id,
            email: data.email,
            token: sha256(
              `${process.env.APP_KEY}:${user.toJSON().id}:${data.email}`
            ),
          })
          Event.fire('user::confirmation', user, confirmation)
        } catch (e) {
          return response.status(400).send({
            status: 'error',
            message:
              'You have already made a change request. Check your email or try again in 15 minutes.',
          })
        }
        return response.status(200).send({
          status: 'success',
          message: 'A confirmation of the mail change was sent to your email',
        })
      } else {
        user.merge(data)
        await user.save()
        return response
          .status(200)
          .send({ status: 'success', message: 'Profile updated successfully' })
      }
    } catch (e) {
      console.log(e)
      return response
        .status(400)
        .send({ status: 'error', message: 'Request Error' })
    }
  }

  async confirmation({ request, auth, response }) {
    const data = request.only(['token'])
    const user = await auth.getUser()
    if (!user) {
      return response.status(400).send({
        status: 'error',
        message: 'You are not logged in! Log in to your profile and try again.',
      })
    }
    const confirmation = await EmailConfirmation.findBy('token', data.token)
    if (confirmation) {
      user.email = confirmation.toJSON().email
      await user.save()
      await confirmation.delete()
      return response.status(200).send({
        status: 'success',
        message: 'Mail has been changed successfully!',
      })
    }
    return response.status(400).send({
      status: 'error',
      message: 'Error! Link has expired, please try again.',
    })
  }
}

module.exports = ProfileController
