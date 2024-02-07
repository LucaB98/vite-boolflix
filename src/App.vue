<script>

import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import FirstTitle from './components/FirstTitle.vue';
import ListCard from './components/ListCard.vue';

export default {
  name: 'Boolflix',
  components: { AppHeader, FirstTitle, ListCard },
};
</script>

<template>
  <AppHeader />

  <main id="main">
    <FirstTitle />
    <ListCard />
  </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>