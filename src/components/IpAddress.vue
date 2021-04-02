<template>
  <div class="address">
    <div class="address__container">
      <input
        type="text"
        v-model="value"
        class="address__input"
        :maxlength="maxlength"
        placeholder="Search for any IP address or domain">
      <button class="address__button">&rsaquo;</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IpAddress",

    data () {
      return {
        value: '',
        maxlength: 15,
        ip_regex: /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}/,
      }
    },

    computed: {
      validIPAddress () {
        const { ip_regex, value } = this;

        return ip_regex.test(value);
      }
    }
  }
</script>

<style lang="scss">
  .address {
    width: 100%;
    height: 3.75rem;
    overflow: hidden;
    margin-top: 24rem;
    max-width: 34.875rem;
    border-radius: .375rem;

    &__container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__input {
      flex: 1 calc(100% - 3.625rem);
      height: 100%;
      border: 0 none;
      padding-left: 1.5rem;
      font-size: $baseSize;
      font-family: Rubik, sans-serif;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;

      flex: 1 3.625rem;
      height: 100%;
      color: $white;
      border: 0 none;
      cursor: pointer;
      font-size: $baseSize * 2;
      background-color: #000;
      font-family: Rubik, sans-serif;
    }
  }
</style>