<template>
  <div id="app">
    <main>
      <input class="searchbox" v-model="$store.state.location" @keypress="fetchWeather" placeholder="Enter a City...">
      <DashBoard />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DashBoard from './components/DashBoard.vue'

export default Vue.extend({
  name: 'App',
  components: {
    DashBoard
  },
  mounted () {
    const data = new Date()
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    this.$store.state.weekday = weekday[data.getDay()]
    this.$store.state.weather = JSON.parse(localStorage.weather)
    this.$store.state.location = JSON.parse(localStorage.location)
  },
  methods: {
    fetchWeather (e: { key: string }) {
      if (e.key === 'Enter') {
        fetch(`${this.$store.state.api_base}weather?q=${this.$store.state.location}&units=metric&APPID=${this.$store.state.api_key}`)
          .then(res => {
            return res.json()
          }).then(this.setResults)
      }
    },
    setResults (results: any) {
      this.$store.state.weather = results
      localStorage.weather = JSON.stringify(this.$store.state.weather)
      localStorage.location = JSON.stringify(this.$store.state.location)
    }
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
  font-family: system-ui;
}

#app {
}

main {
  min-height: 100vh;
  padding: 25px;
  background: url('./assets/394054.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.searchbox {
  width: 100%;
  padding: 15px;
  font-size: 1.5em;
  background: rgba(white, 0.15);
  border-radius: 25px;
  border: none;
  color: white;
  box-shadow: 5px 5px 10px black;
  backdrop-filter: blur(5px);
  transition-duration: 0.5s;
  margin: 0px 0px 50px;
  &:hover {
    scale: 1.01;
  }
  &:focus {
    background-color: rgba(lightgray, 0.30);
    outline: none;
    scale: 1.01;
  }
}
</style>
