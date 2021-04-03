<template>
  <section class="details">
    <div class="details__container">
      <div class="details__box">
        <span class="details__title">ip address</span>
        <span class="details__value">{{ userIP }}</span>
      </div>

      <div class="details__box">
        <span class="details__title">location</span>
        <span class="details__value">{{ location }}</span>
      </div>

      <div class="details__box">
        <span class="details__title">timezone</span>
        <span class="details__value">{{ timezone }}</span>
      </div>

      <div class="details__box">
        <span class="details__title">isp</span>
        <span class="details__value">{{ ISP }}</span>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name: "IpDetails",

    methods: mapActions([
      'captureUserInfo'
    ]),

    computed: {
      ...mapState([
        'ISP',
        'userIP',
        'loc_geo'
      ]),

      ...mapGetters([
        'location',
        'timezone'
      ])
    },

    watch: {
      userIP (val) {
        this.captureUserInfo();
      }
    }
  }
</script>

<style lang="scss">
  .details {
    width: 100%;
    height: auto;
    max-width: 90%;
    z-index: 99 !important;
    border-radius: .375rem;
    background-color: $white;

    bottom: 0rem;
    position: absolute;
    transform: translateY(50%);

    &__container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin: .625rem;

      @include breakpoint-up (tablet) {
        flex-direction: row;
        margin: 1.25rem .625rem;
      }
    }

    &__box {
      display: flex;
      margin-bottom: .75rem;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @include breakpoint-up (tablet) {
        margin: 0;
        width: 12.5rem;
        padding: 0 .625rem;
        position: relative;
        align-self: stretch;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    &__title {
      font-size: .75rem;
      font-weight: 500;
      color: $darkGray;
      text-transform: uppercase;
      font-family: Rubik, sans-serif;
    }

    &__value {
      font-weight: 500;
      margin-top: .3125rem;
      color: $veryDarkGray;
      font-size: $baseSize * 1.1;
      font-family: Rubik, sans-serif;
    }
  }
</style>