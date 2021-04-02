<template>
  <section class="details">
    <div class="details__container">
      <div class="details__box">
        <span class="details__title">ip address</span>
        <span class="details__value">{{ ip_address }}</span>
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
        <span class="details__value">{{ isp }}</span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "IpDetails",

    props: {
      ip_address: {
        type: String,
        required: true,
        default: 'loading...'
      },

      location: {
        type: String,
        required: true,
        default: 'loading...'
      },

      timezone: {
        type: String,
        required: true,
        default: 'loading...'
      },

      isp: {
        type: String,
        required: true,
        default: 'loading...'
      }
    }
  }
</script>

<style lang="scss">
  .details {
    width: 100%;
    height: auto;
    max-width: 90%;
    border-radius: 6px;
    background-color: $white;

    bottom: 0px;
    position: absolute;
    transform: translateY(50%);

    &__container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin: 10px;

      @include breakpoint-up (tablet) {
        margin: 20px 10px;
        flex-direction: row;
      }
    }

    &__box {
      display: flex;
      margin-bottom: 12px;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @include breakpoint-up (tablet) {
        margin: 0;
        width: 200px;
        padding: 0 10px;
        position: relative;
        align-self: stretch;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    &__title {
      font-size: 12px;
      font-weight: 500;
      color: $darkGray;
      text-transform: uppercase;
      font-family: Rubik, sans-serif;
    }

    &__value {
      margin-top: 5px;
      font-weight: 500;
      color: $veryDarkGray;
      font-size: $baseSize * 1.1;
      font-family: Rubik, sans-serif;
    }
  }
</style>