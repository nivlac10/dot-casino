'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddNewColumnSchema extends Schema {
  up () {
    this.table('transactions', (table) => {
      table.string('image_url')
    })
  }

  down () {
    this.table('add_new_columns', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddNewColumnSchema
