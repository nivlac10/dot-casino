'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddNewDepositSchema extends Schema {
  up () {
    this.create('deposits', (table) => {
      table.increments()
      table.string('username',256).notNullable().unique
      table.string('amount',256).notNullable()
      table.string('status',256).notNullable()
      table.string('uid',256).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('add_new_deposits')
  }
}

module.exports = AddNewDepositSchema
