'use strict'
const User = use('App/Models/User')
const Transaction = use('App/Models/Transaction')
const Bets = use ('App/Models/CrashBet')
const Crash = use ('App/Models/Crash')
const Detail = use ('App/Models/BankDetail')
const Rate = use('App/Models/Rate')
const moment= require('moment') 

class AdminController {
    async getAllUser() {
        const users = await User.query().where('role_id','=', 1).fetch()
        return users
    }

    async getUser({ request, response }) {
        const data = request.input('data')
        try {
            const user = await User.query().where('id','=',data).fetch()
            return response.json({
                status: 'success',
                message: 'User data retrieved successfully',
                data: user,
            })
        } catch (error) {
            return error
        }
    }

    async getAllTransactions() {
        const transactions = await Transaction.all()
        return transactions
    }
    
    async getSingleTransaction({ request, response }) {
        const data = request.post()
        try {
            const userTransaction = await Transaction.query().where('id', '=', data.id).fetch()
            return userTransaction
        } catch(error) {
            return error
        }
        
    }

    async getBankDetails() {
        const details = await Detail.query().fetch()
        return details
    }

    async updateBankDetails ({request, response}) {
        const data = request.post()
        try {
            const bankDetail = await Detail.find(data.id)
            bankDetail.bank = data.bank
            bankDetail.account = data.account
            const update = await bankDetail.save()
            return bankDetail
        } catch (err) {
            return "YOU FUCKED UP";
        }
    }

    async getBetsHistory() {
        const bets = await Bets.query().orderBy('created_at', 'desc').fetch()
        return bets
    }
    
    async getCrashHistory() {
        const crashes = await Crash.query().orderBy('created_at', 'desc').limit(50).fetch()
        return crashes
    }
    async getCrashRates() {
        const rates = await Rate.query().orderBy('time', 'asc').fetch()
        return rates
    }

    async Test() {
        const time = moment().format('HH:mm')
        const crashRate = await Rate.query().where('time','>', time).orderBy('time', 'asc').pluck('rate').first()
        return crashRate
    }

}

module.exports = AdminController
