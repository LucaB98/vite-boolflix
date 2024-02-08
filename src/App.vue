<script>
import { Api } from './data/data.js'
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';

import ListCard from './components/ListCard.vue';
import axios from 'axios';


export default {
  name: 'Boolflix',
  components: { AppHeader, ListCard },
  methods: {
    setTitleFilter(term) {
      store.filter = term;
    },
    searchProductions() {
      if (!store.filter) {
        store.movies = [];
        store.series = [];
        return;
      }

      this.fetchApi("search/movie", 'movies');
      this.fetchApi("search/tv", 'series');

    },
    fetchApi(endpoint, collection) {
      const { baseUri, language, apiKey } = Api

      const params = {
        query: store.filter,
        api_key: apiKey,
        language
      }
      axios.get(`${baseUri}/${endpoint}`, { params }).then(res => {
        store[collection] = res.data.results
      }).catch(err => {
        console.error(err)
      })
    }
  }
}

</script>

<template>
  <AppHeader @read-submit="searchProductions" @term-changed="setTitleFilter" />

  <main id="main" class="container">
    <ListCard />
  </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>