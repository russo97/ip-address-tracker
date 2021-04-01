<template>
  <header class="header">
    <div class="header__container container">
      <h1 class="header__title">IP Address Tracker</h1>

      <IpAddress />

      <IpDetails :ip_address="user_ip" />
    </div>
  </header>
</template>

<script>
  import IpAddress from "./IpAddress.vue";
  import IpDetails from "./IpDetails.vue";

  export default {
    name: "Header",

    data () {
      return {
        isp: '',
        user_ip: '8.8.8.8',
        location: '',
        timezone: ''
      }
    },

    components: {
      IpAddress,
      IpDetails
    },

    async created () {
      const ipinfo = await ( await fetch('http://www.geoplugin.net/json.gp') ).json();

      this.user_ip = ipinfo.geoplugin_request;
    },

    watch: {
      user_ip () {
        console.log('user ip loaded')
      }
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