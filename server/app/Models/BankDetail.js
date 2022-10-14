'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BankDetail extends Model {
    static visible() {
        return ['id', 'bank', 'account', 'created_at', 'updated_at']
    }
}

module.exports = BankDetail
