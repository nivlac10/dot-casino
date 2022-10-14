'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTransactionsTblSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.string('username',256).notNullable().unique
      table.integer('amount',238).notNullable()
      table.string('method',256).notNullable()
      table.string('status',256).notNullable()
      table.string('uid',256).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_transactions_tbls')
  }
}

module.exports = CreateTransactionsTblSchema
