'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rate extends Model {
    static get table() {
        return 'add_crash_rates'
    }

    static getVisible() {
        return ['id', 'time', 'rate']
    }
}

module.exports = Rate
