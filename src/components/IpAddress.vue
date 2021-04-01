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
    height: 60px;
    max-width: 558px;
    margin-top: 32px;
    overflow: hidden;
    border-radius: 6px;

    &__container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__input {
      flex: 1 calc(100% - 58px);
      height: 100%;
      border: 0 none;
      padding-left: 24px;
      font-size: $baseSize;
      font-family: Rubik, sans-serif;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;

      flex: 1 58px;
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