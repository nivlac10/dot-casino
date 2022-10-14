<template>
    <t-modal :click-to-close="false" name="withdrawal">
        <template slot="close">
            <svg class="w-full h-full">
                <use xlink:href="/img/icon/free/sprite.svg#close"></use>
            </svg>
        </template>
        <template #header>
            <h3>Withdrawal</h3>
            
        </template>
        <form class="grid grid-cols-1 gap-5" @submit.prevent="withdrawal">
            <div class="relative hidden">
                <t-input
                v-model="withdrawalDetails.username"
                class="!pl-12"
                variant="strong"
                placeholder="Enter your username"
                ></t-input>
                <img
                class="absolute transform -translate-y-1/2 top-1/2 left-4"
                src="/img/icon/user.svg"
                alt=""
                />
            </div>
            <div class="relative">
                <t-input
                v-model="withdrawalDetails.amount"
                class="!pl-12"
                variant="strong"
                :max="this.maxAmount"
                type="number"
                placeholder="Enter the amount"
                ></t-input>
                <img
                class="absolute transform -translate-y-1/2 top-1/2 left-4"
                src="/img/icon/coin.svg"
                alt=""
                />
            </div>
            <p>
                Please make sure you have entered the details correctly<br />
                <a href="#" class="font-semibold text-primary"
                >Processing times will be around 5-10 mins.</a
                >
            </p>
            <t-button type="submit" variant="primary">
                <div class="flex items-center justify-center py-2">
                <span>Withdraw</span>
                <img class="ml-2" src="/img/icon/next.svg" alt="" />
                </div>
            </t-button>
        </form>
    </t-modal>
</template>

<script>
    export default {
    components: {  },
    data() {
        return {
            withdrawalDetails: {
                amount: '',
                username: this.$auth.user.username,
                status: 'Pending',
                method: 'Withdrawal',
                uid: this.$auth.user.id,
            },
            maxAmount: this.$auth.user.balance,
        }
    },
    async mounted() {
        
        console.log(this.maxAmount)
    },  
    methods: {
        async withdrawal() {
            await this.$axios.$post('api/wallet/withdrawal', this.withdrawalDetails).then((response) => {
                console.log(response)
                this.$modal.hide('withdrawal')
            })
        },
        async notification() {
            
        }
    },
}
</script>

<style></style>

