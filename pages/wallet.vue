<template>
    <section class="container">
        <h1 class="mb-6 text-2xl font-black uppercase">Your Wallet</h1>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-5 rounded-xl">
      <div class="col-span-2">
        <div class="p-8 bg-white rounded-xl">
            <h2 class="mb-5 text-lg font-bold">Current Balance : SGD {{ userDetails.balance }}</h2>
        </div>
        <div class="bg-white pb-8 h-auto flex justify-center items-center rounded-xl">
        <div class="space-y-16">
            <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            
                <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/Zi6v09P.png">
                
                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light">
                                Username
                            </p>
                            <p class="font-medium tracking-widest">
                                {{ userDetails.username }}
                            </p>
                        </div>
                        <img class="w-14 h-14" src="/logo.svg"/>
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                            Current Balance
                        </p>
                        <p class="font-medium tracking-more-wider">
                            SGD {{ userDetails.balance }}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light text-xs">
                                    Valid Since
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    {{ format }}
                                </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    Expiry
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    ·· / ··
                                </p>
                            </div>
    
                            <div class="">
                                <p class="font-light text-xs">
                                    Account Status
                                </p>
                                <p class="font-bold tracking-more-wider text-sm">
                                    Active
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
      <div class="col-span-3 space-y-3">
        <div class="p-8 bg-white rounded-xl">
          <h2 class="mb-3 text-xl font-bold leading-none">
            Deposit Money?
          </h2>
          <p class="mb-3">
            If you have any questions, please do not hesitate to contact our 
            <a
              href="#"
              class="border-black border-dotted cursor-pointer border-b-1"
              target="_blank"
              ><strong>friendly customer support.</strong></a
            >
            
          </p>
          
            <t-button variant="primary" @click="$modal.show('deposit')">
                <div class="flex items-center">
                    <span>Deposit</span>
                </div>
            </t-button>
            
        </div>
        <div class="p-8 bg-white rounded-xl">
          <h2 class="mb-3 text-xl font-bold leading-none">
            Withdraw Money?
          </h2>
          <p class="mb-3">
            If you have any questions, please do not hesitate to contact our 
            <a
              href="#"
              class="border-black border-dotted cursor-pointer border-b-1"
              target="_blank"
              ><strong>friendly customer support.</strong></a
            >
            
          </p>
            <t-button variant="primary" @click="$modal.show('withdrawal')">
                <div class="flex items-center">
                <span>Withdraw</span>
                </div>
            </t-button>
        </div>
      </div>
    </div>  
    <br>
        <div class="p-4 bg-white xl:p-12 xl:col-span-4 rounded-3xl">
            <h2 class="mb-5 text-lg font-semibold">Transaction History</h2>
            <t-table
            :headers="['Transaction ID', 'Username', 'Amount', 'Method', 'Status', 'Created Date', 'Last Updated']"
            :data="history"
            :per-page="10"
            :class="history-table">
            <t-pagination :total-items="totalRows"  :per-page="10" />
            </t-table>
        </div>
    </section>
</template>
<script>
    import moment from 'moment'
    export default {
        data() {
            return {
                userDetails : {
                    id: '',
                    balance: '',
                    username: '',
                    created_at: '',
                },
                history : [],
                format : '',
            }
        },
        async mounted() {
            Object.assign(this.userDetails, this.$auth.user)
            console.log(this.userDetails)

            let transactionHistory = await this.$axios.post('http://127.0.0.1:3333/api/wallet/history', {
                    uid: this.userDetails.id
            })
            this.history = transactionHistory.data.map(row => [row.id, row.username, row.amount, row.method, row.status, row.created_at, row.updated_at])
            console.log(this.history)
            const created = this.userDetails.created_at
            this.format = moment(this.created).format("YYYY-MM-DD")
        }
    }
</script>