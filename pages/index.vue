<template>
  <section class="container">
    <h1 class="mb-6 text-2xl font-black uppercase">Popular <span class="mb-6 text-2xl font-black uppercase text-primary">Games</span></h1>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <card-game class="lg:col-span-2" name="Crash" :to="{ name: 'games-crash' }"></card-game>
      <card-game disabled name="PvP"></card-game>
      <card-game disabled name="Wheel"  />
      <card-game disabled name="Dice"></card-game>
      <card-game disabled name="CoinFlip"></card-game>
    </div>
    <br>
    <h1 class="mb-6 text-2xl font-black uppercase">Slot <span class="mb-6 text-2xl font-black uppercase text-primary">Games</span></h1>
    <div class="container mx-auto px-5 py-5">
      <div class="-m-4 flex flex-wrap">
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'slot-game', params: { title: 'Hellcatraz' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/hellcatraz.png" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">SLOT</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Hellcatraz</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'slot-game', params: { title: 'Big Bamboo' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/big-bamboo.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">SLOT</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Big Bamboo</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'slot-game', params: { title: 'Aztec Blaze' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/aztec-blaze.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">SLOT</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Aztec Blaze</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'slot-game', params: { title: 'Razor Shark' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/razor-shark.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">SLOT</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Razor Shark</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'slot-game', params: { title: 'Gates Of Olympus' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/gates-of-olympus.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">SLOT</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Gates Of Olympus</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'slot-game', params: { title: 'Jammin Jars' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/jammin-jars.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">SLOT</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Jammin Jars</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'slot-game', params: { title: 'Monkey Warrior' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/monkey-warrior.png" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">SLOT</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Monkey Warrior</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'slot-game', params: { title: 'Sugar Rush' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/sugar-rush.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">SLOT</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Sugar Rush</h2>
          </div>
        </div>
      </div>
    </div>
    <br>
    <h1 class="mb-6 text-2xl font-black uppercase">Table <span class="mb-6 text-2xl font-black uppercase text-primary">Games</span></h1>
    <div class="container mx-auto px-5 py-5">
      <div class="-m-4 flex flex-wrap">
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'table-games', params: { title: 'Baccarat Deluxe' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/baccarat-deluxe.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">TABLE</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Baccarat Deluxe</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'table-games', params: { title: 'American Roulette' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/american-roulette.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">TABLE</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">American Roulette</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'table-games', params: { title: 'Blackjack Pro' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/blackjack-pro.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">TABLE</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Blackjack Pro</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'table-games', params: { title: 'Classic Blackjack' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/classic-blackjack.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">TABLE</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Classic Blackjack</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'table-games', params: { title: 'European Roulette' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/european-roulette.png" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">TABLE</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">European Roulette</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'table-games', params: { title: 'French Roulette' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/french-roulette.png" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">TABLE</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">French Roulette</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'table-games', params: { title: 'Multi Hand Blackjack' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/multi-hand-blackjack.png" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">TABLE</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Multi Hand Blackjack</h2>
          </div>
        </div>
        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <nuxt-link :to="{name:'table-games', params: { title: 'Roulette Touch' } }" class="relative block h-48 overflow-hidden rounded">
            <img alt="slot-games" class="block h-full w-full object-cover object-center cursor-pointer" src="/img/games-image/roulette-touch.jpeg" />
          </nuxt-link>
          <div class="mt-4">
            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">TABLE</h3>
            <h2 class="title-font text-lg font-medium text-gray-900">Roulette Touch</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cardGame from '~/components/card/card-game.vue'
export default {
  components: { cardGame },
}
</script>

<style></style>
