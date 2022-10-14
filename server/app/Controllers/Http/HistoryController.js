'use strict'

const Bets = use('App/Models/CrashBet')

class HistoryController {
    async getHistory() {
        const data = await Bets.query().orderBy('id','desc').with('user', (builder)=>{
            builder.select('id','username')
        }).limit(15).fetch()
        return data
    }

}

module.exports = HistoryController
