<script>
import { ApiUri } from './data/data.js'
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import FirstTitle from './components/FirstTitle.vue';
import ListCard from './components/ListCard.vue';
import axios from 'axios';
const movies = 'movie?query=spiderman&api_key=4003007d0853483950963e3e1e4c59c0';
const series = 'tv?query=pippo&api_key=4003007d0853483950963e3e1e4c59c0';

export default {
  name: 'Boolflix',
  components: { AppHeader, FirstTitle, ListCard },
  created() {
    axios.get(ApiUri + movies).then(res => {
      store.movies = res.data.results
    }),
      axios.get(ApiUri + series).then(res => {
        store.series = res.data.results
      })
  }
}

</script>

<template>
  <AppHeader />

  <main id="main" class="container">
    <FirstTitle />
    <ListCard />
  </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>