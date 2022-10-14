'use strict'

const User = use('App/Models/User')
const Transaction = use('App/Models/Transaction')
const Rate = use('App/Models/Rate')
const moment= require('moment') 

class WalletController {
    //User API
    async getUserBalance({ request, response }) {
        const id = request.post()
        const balance = await User.find(id)
        return balance
    }

    async getUserHistory ({ request, response }) {
        const data = request.post()
        const history = await Transaction.query().where('uid', data.uid).fetch()
        return history
    }

    //Admin Panel API
    
    async userDeposit ({ request, response }) {
        const data = request.post()
        try {
            const deposit = new Transaction
            deposit.username = data.username
            deposit.amount = data.amount
            deposit.status = 'Pending'
            deposit.method = 'Deposit'
            deposit.uid = data.uid
            deposit.image_url = data.imageURL
            await deposit.save()
            return response.json({
                status: 'success',
                message: 'Deposit request submitted succesfully!',
                data: deposit,
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Something went wrong, please try again later!',
            })
        }
    }

    async updateBalance ({ request, response }) {
        const data = request.post()

        try {
            const transaction = await Transaction.find(data.id)
            //Get the handling method e.g Withdrawal or Deposit
            transaction.status = data.status
            const update = await transaction.save()
            if (data.status === 'Approved' && data.method === 'Deposit') {
                //Get the amount user want to deposit
                const amount = parseInt(data.amount)
                //Find the user and update its balance
                const user = await User.find(data.uid)
                user.balance = user.balance + amount
                const add = await user.save()
                response.send("Successfuly deposited RM" + amount)
            } else if (data.status === 'Approved' && data.method === 'Withdrawal') {
                //Get the amount user want to withdrawal
                const amount = parseInt(data.amount)
                //Find the user and update its balance
                const user = await User.find(data.uid)
                user.balance = user.balance - amount
                const add = await user.save()
                response.send("Successfuly withdrawn RM" + amount)
            } else if (data.status === 'Rejected') {
                response.send('Succesfully Updated with Rejection')
            }
        } catch (error) {
            response.send(error)
        }
    }

    async userWithdrawal ({ request, response }) {
        const data = request.post()
        try {
            const withdrawal = new Transaction
            withdrawal.username = data.username
            withdrawal.amount = data.amount
            withdrawal.status = 'Pending'
            withdrawal.method = 'Withdrawal'
            withdrawal.uid = data.uid
            await withdrawal.save()
            return response.json({
                status: 'success',
                message: 'Deposit request submitted succesfully!',
                data: withdrawal,
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Something went wrong, please try again later!',
            })
        }
    }
    async testDate({request, response}) {
        const date = new Date()
        const time = moment().format('HH:mm')
        const interval = moment().add(1, 'hours').format('HH')      
        const crashRate = await Rate.query().where('time','>', time).pluck('rate').first()
        return crashRate
        
    }
}

module.exports = WalletController
