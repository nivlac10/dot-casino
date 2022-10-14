'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transaction extends Model {
    static get visible() {
        return ['id', 'username', 'uid',  'amount', 'method', 'status', 'created_at', 'updated_at', 'image_url']
    }
}

module.exports = Transaction
