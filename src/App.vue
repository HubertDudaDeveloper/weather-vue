<template>
  <div id="app">
    <main>
      <LocationWeather />
      <DashBoard />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LocationWeather from './components/LocationWeather.vue'
import DashBoard from './components/DashBoard.vue'

export default Vue.extend({
  name: 'App',
  components: {
    LocationWeather,
    DashBoard
  },
  data () {
    return {
      api_key: '208a23c3738402ec171b42b98aa0f284',
      api_base: 'https://api.openweathermap.org/data/2.5/',
      location: '',
      weather: {}
    }
  },
  methods: {
    
  }

})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'monserrat';
}

#app {
}

main {
  min-height: 100vh;
  padding: 25px;
}
</style>
