'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCrashRateSchema extends Schema {
  up () {
    this.create('add_crash_rates', (table) => {
      table.increments()
      table.time('time').notNullable()
      table.string('rate').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('add_crash_rates')
  }
}

module.exports = AddCrashRateSchema
