<template>
    <section class="dashboard" v-if="$store.state.weather.main">
        <span class="dashboard__item dashboard__item--location">{{$store.state.weather.name}}</span>
        <span class="dashboard__item dashboard__item--main">{{ $store.state.weather.main.temp }} °C</span>
        <span class="dashboard__item dashboard__item--feel">Feels Like: {{ $store.state.weather.main.feels_like }} °C</span>
        <span class="dashboard__item dashboard__item--description">{{ $store.state.weather.weather[0].description }}</span>
        <span class="dashboard__item dashboard__item--weekday">{{ $store.state.weekday }}</span>
    </section>
    <section class="dashboard" v-else>
        <span class="dashboard__item dashboard__item--location"> Pick a City! </span>
        <span class="dashboard__item dashboard__item--weekday">{{ $store.state.weekday }}</span>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DashBoard'
})
</script>
<style lang="scss">
.dashboard {
    display: grid;
    width: 100%;
    padding: 15px;
    background: rgba(white, 0.15);
    border-radius: 25px;
    border: none;
    color: white;
    box-shadow: 5px 5px 10px black;
    text-shadow: 1px 1px 1px black;
    backdrop-filter: blur(5px);
    justify-items: center;
    &__item {
        padding: 10px;
        font-size: 3.5em;
        &--location {
            font-weight: italic;
        }
        &--main {
            font-weight: bold;
        }
        &--feel {
            font-size: 2em;
        }
        &--description {
            font-size: 2em;
            text-transform: capitalize;
        }
        &--weekday {
            font-size: 2.5em;
            font-weight: bold;
            text-transform: capitalize;
        }
    }
}
</style>
