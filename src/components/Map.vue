<template>
  <div class="mapview">
    <div id="mapView"></div>
  </div>
</template>

<script>
  import L from 'leaflet';
  import "leaflet/dist/leaflet.css";

  import { mapGetters } from 'vuex';

  export default {
    name: "Map",

    data () {
      return {
        mapContainer: null
      }
    },

    methods: {
      setupLeafletMap () {
        const { geolocation } = this;

        const { VITE_MAPBOX_TOKEN } = import.meta.env;

        this.mapContainer = L.map("mapView");

        L.tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${VITE_MAPBOX_TOKEN}`, {
            attribution: 'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            accessToken: VITE_MAPBOX_TOKEN
          }
        ).addTo(this.mapContainer);
      }
    },

    computed: {
      ...mapGetters([
        'geolocation'
      ])
    },

    mounted () {
      this.setupLeafletMap();
    },

    watch: {
      geolocation (cur) {
        this.mapContainer.setView(
          cur.length
            ? cur
            : [-8.0581959, -34.8807641],
          15
        );

        L.marker(cur).addTo(this.mapContainer);
      }
    }
  }
</script>

<style lang="scss">
  .mapview {
    flex: 1 100%;

    #mapView {
      height: 100%;
      z-index: 10 !important;
    }
  }
</style>