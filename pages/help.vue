<template>
  <section class="container help">
    <h1 class="mb-6 text-2xl font-black uppercase">Help Centre</h1>
    <div class="grid grid-cols-1 gap-4 xl:gap-6 xl:grid-cols-4">
      <div
        class="p-4 bg-white xl:p-12 xl:col-span-4 rounded-3xl help__annotation"
      >
        <p class="max-w-4xl">
          <b>Got Questions?</b> Look up <b>Win Casino's</b> help centre and see if you can find the answers for the questions you have. 
          If there are any questions you have that is not answered in this section, please feel free to contact our customer support at help@wincasino.com
          
        </p>
      </div>
      <div
        class="flex flex-col items-center px-6 py-12 space-y-5 text-center bg-white rounded-3xl"
      >
        <img src="/img/icon/clock.svg" alt="working-hours" />
        <h2 class="text-lg font-semibold">Working Hours</h2>
        <hr class="divider" />
        <div class="flex flex-col items-center">
          <span>Monday - Sunday</span>
          <strong>00:00 - 23:59</strong>
        </div>
        <div class="flex flex-col items-center">
          <span>Public Holiday</span>
          <strong>00:00 - 23:59</strong>
        </div>
      </div>
      <div
        class="flex flex-col items-center px-3 py-12 space-y-5 text-center bg-white rounded-3xl"
      >
        <img src="/img/icon/help-chat.svg" alt="Customer Support (LIVE)" />
        <h2 class="text-lg font-semibold">Customer Support (LIVE)</h2>
        <hr class="divider" />
        <a href="#" class="font-semibold text-primary">
          Please contact us on Telegram @wincasinos
        </a>
        <div class="flex flex-col items-center">
          <span>Average response time</span>
          <strong>3 minute</strong>
        </div>
      </div>
      <div
        class="flex flex-col items-center px-3 py-12 space-y-5 text-center bg-white rounded-3xl"
      >
        <img src="/img/icon/help-email.svg" alt="Служба поддержки (EMAIL)" />
        <h2 class="text-lg font-semibold">Customer Support (EMAIL)</h2>
        <hr class="divider" />
        <a href="mailto:help@wincasino.com" class="font-semibold text-primary">
          help@wincasino.com
        </a>
        <div class="flex flex-col items-center">
          <span>Average response time</span>
          <strong>2 hour</strong>
        </div>
      </div>
      <div
        class="flex flex-col items-center px-3 py-12 space-y-5 text-center bg-white rounded-3xl"
      >
        <img src="/img/icon/help-email.svg" alt="found a bug (EMAIL)" />
        <h2 class="text-lg font-semibold">Found a bug?</h2>
        <hr class="divider" />
        <a href="mailto:it@wincasino.com" class="font-semibold text-primary">
          it@wincasino.com
        </a>
        <div class="flex flex-col items-center">
          <span>Monday - Friday</span>
          <strong>09:00 - 18:00</strong>
        </div>
      </div>
      <div class="p-4 bg-white xl:p-12 xl:col-span-4 rounded-3xl">
        <h2 class="mb-5 text-lg font-semibold">Frequently Asked Questions</h2>
        <div class="help__questions">
          <app-spoiler></app-spoiler>
          <app-spoiler></app-spoiler>
          <app-spoiler></app-spoiler>
        </div>
      </div>
      <div class="p-4 bg-white xl:p-12 xl:col-span-4 rounded-3xl">
        <h2 class="mb-5 text-lg font-semibold">Restrictions</h2>
        <div class="grid gap-4 xl:grid-cols-3">
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              One user is only allowed to have one account. User must be based in Malaysia or Singapore, please stay tuned for latest updates on the supported country.
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              No more than one account can be registered with the same IP address. We do not condone the usage of account sharing due to user protection terms.
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              It is forbidden to use the site for illegal activity such as exchanging currency, money laundering and phishing. 
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              Withdrawal are only available after you have reached 10 games played in the website. For more information, please contact our support team at help@wincasino.com
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              Whilst communicating with our friendly support team, please refrain using swear words, abusive or insulting language.
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              It is forbidden to link to third-party resources, post your
              affiliate links, spamming, flooding, begging.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSpoiler from '~/components/ui/app-spoiler.vue'
export default {
  components: {
    AppSpoiler,
  },
}
</script>

<style lang="scss">
.help {
  &__annotation {
    background: url('/img/bg-help.svg') right bottom no-repeat, #ffffff;
  }

  &__questions {
    @apply rounded-3xl overflow-hidden;

    & > * {
      @apply bg-cream;

      &:nth-child(even) {
        @apply bg-grayest;
      }
    }
  }
}
</style>
