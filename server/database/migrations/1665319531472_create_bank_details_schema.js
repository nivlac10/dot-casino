'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateBankDetailsSchema extends Schema {
  up () {
    this.create('bank_details', (table) => {
      table.increments()
      table.string('bank').notNullable()
      table.string('account').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_bank_details')
  }
}

module.exports = CreateBankDetailsSchema
