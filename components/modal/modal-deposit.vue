<template>
    <t-modal :click-to-close="false" name="deposit">
        <template slot="close">
            <svg class="w-full h-full">
                <use xlink:href="/img/icon/free/sprite.svg#close"></use>
            </svg>
        </template>
        <template #header>
            <h3>Deposit</h3>   
        </template>
        <label>Our Bank Name</label>
        <t-input v-model="bankDetails.bank" disabled></t-input>
        <br>
        <label>Our Bank Account No.</label>
        <t-input v-model="bankDetails.account" disabled></t-input>
        <br>
        <br>
        <form class="grid grid-cols-1 gap-5" @submit.prevent="deposit">
            <div class="relative hidden">
                <t-input
                v-model="depositDetails.username"
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
                v-model="depositDetails.amount"
                class="!pl-12"
                variant="strong"
                type="number"
                placeholder="Enter the amount"
                ></t-input>
                <img
                class="absolute transform -translate-y-1/2 top-1/2 left-4"
                src="/img/icon/coin.svg"
                alt=""
                />
            </div>

            <div class="relative">
                <label>Receipt</label>
                <t-input                
                class="!pl-12"
                variant="strong"
                accept="image/*"
                type="file"        
                name="image"
                id="image"       
                @change="handleFileUpload($event)"
                ></t-input>                
            </div>
            <div class="relative hidden">
                <t-input
                v-model="depositDetails.imageURL"
                class="!pl-12"
                variant="strong"
                type="text"
                placeholder="Enter the amount"
                required
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
                <span>Deposit</span>
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
            depositDetails: {
                amount: '',
                username: this.$auth.user.username,
                status: 'Pending',
                method: 'Withdrawal',
                uid: this.$auth.user.id,
                imageURL : '',
            },
            bankDetails : {
                bank: '',
                account: '',
            }
        }
    },
    async mounted() {
        let detail = await this.$axios.post('http://127.0.0.1:3333/api/admin/getBankDetails')
        this.bankDetails.bank = detail.data[0].bank
        this.bankDetails.account = detail.data[0].account
    },
    methods: {
        async deposit() {
            
            await this.$axios.$post('api/wallet/deposit', this.depositDetails).then((response) => {
                console.log(response)
                this.$modal.hide('deposit')
            })
        },

        async handleFileUpload(event) {
            
            let uploadValue = 0
            const formData = event.target.files[0]
            console.log(formData.name)
            const storageRef = this.$firebase.storage().ref(`${formData.name}`).put(formData)
            storageRef.on(`state_changed`, snapshot => {
                uploadValue = (snapshot.bytesTransffered/snapshot.totalBytes) * 100
            }, error => {console.log(error.message)}, 
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
                this.depositDetails.imageURL = url
                console.log(this.depositDetails.imageURL)
            })
            )
            
        }
    },
}
</script>

<style></style>

