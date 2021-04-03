<template>
  <div id="app">
    <Header />

    <Map />
  </div>
</template>

<script>
  import Map from "./components/Map.vue";
  import Header from "./components/Header.vue";

  export default {
    name: "App",

    components: {
      Map,
      Header
    }
  }
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
  }
</style>