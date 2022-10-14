<template>
  <t-modal :click-to-close="false" name="register">
    <template slot="close">
      <svg class="w-full h-full">
        <use xlink:href="/img/icon/free/sprite.svg#close"></use>
      </svg>
    </template>
    <template #header>
      <h3>Sign Up</h3>
    </template>
    
    <form class="grid grid-cols-1 gap-5" @submit.prevent="register">
      <div class="relative">
        <t-input
          v-model="user.username"
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
          v-model="user.password"
          class="!pl-12"
          variant="strong"
          type="password"
          placeholder="Enter your password"
        ></t-input>
        <img
          class="absolute transform -translate-y-1/2 top-1/2 left-4"
          src="/img/icon/password.svg"
          alt=""
        />
      </div>
      <div class="relative">
        <t-input
          v-model="user.password_confirmation"
          class="!pl-12"
          variant="strong"
          type="password"
          placeholder="Confirm password"
        ></t-input>
        <img
          class="absolute transform -translate-y-1/2 top-1/2 left-4"
          src="/img/icon/password.svg"
          alt=""
        />
      </div>
      <div class="relative">
        <t-input
          v-model="user.email"
          class="!pl-12"
          variant="strong"
          type="email"
          placeholder="Enter your email"
        ></t-input>
        <img
          class="absolute transform -translate-y-1/2 top-1/2 left-4"
          src="/img/icon/email.svg"
          alt=""
        />
      </div>
      <p>
        By registering you accept the Terms and Conditions<br />
        <a href="#" class="font-semibold text-primary"
          >User Agreement</a
        >
      </p>
      <t-button type="submit" variant="primary">
        <div class="flex items-center justify-center py-2">
          <span>Register</span>
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
      user: {
        username: '',
        password: '',
        password_confirmation: '',
        email: '',
      },
    }
  },
  methods: {
    async register() {
      await this.$axios
        .$post('/api/v1/auth/register', this.user)
        .then(async (data) => {
          try {
            await this.$auth.setUserToken(data.data.token)
            this.$modal.hide('register')
          } catch (e) {
            console.log(e)
          }
        })
    },
  },
}
</script>

<style></style>
