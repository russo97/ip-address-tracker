<template>
  <header class="header">
    <div class="header__container container">
      <h1 class="header__title">IP Address Tracker</h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
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
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
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