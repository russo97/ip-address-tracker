<template>
  <header class="header">
    <div class="header__container container">
      <h1 class="header__title">IP Address Tracker</h1>

      <IpAddress />

      <IpDetails />
    </div>
  </header>
</template>

<script>
  import IpAddress from "./IpAddress.vue";
  import IpDetails from "./IpDetails.vue";

  import { mapActions } from 'vuex';

  import '@/assets/images/pattern-bg.png';

  export default {
    name: "Header",

    methods: {
      ...mapActions([
        'setIPAddress',
        'setUserPosition'
      ])
    },

    components: {
      IpAddress,
      IpDetails
    },

    async created () {
      if (navigator.geolocation) {
        await navigator.geolocation.watchPosition(geolocation => {
          const { latitude, longitude } = geolocation.coords;

          return this.setUserPosition(`${latitude}|${longitude}`);
        });
      }
      
      await this.setIPAddress('192.212.174.101');
    }
  }
</script>

<style lang="scss">
  .header {
    width: 100%;
    height: 18.75rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./src/assets/images/pattern-bg.png');

    @include breakpoint-up (desktop) {
      height: 17.625rem;
    }

    &__container {
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
    }

    &__title {
      color: $white;
      font-weight: 500;
      font-size: 1.4rem;
      font-family: Rubik, sans-serif;
      transition: all .2s ease-in-out;

      @include breakpoint-up (mobile) {
        font-size: 2rem;
      }
    }
  }
</style>