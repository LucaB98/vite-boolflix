<script>
import CurrentCard from './currentCard.vue';
import { store } from '../data/store.js';

export default {
    name: 'ListCard',
    components: { CurrentCard },
    data: () => ({
        store
    })
};
</script>

<template>
    <section>
        <h1 class="mt-5">MOVIE</h1>
        <div class="divider mb-2"></div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div class="col p-3" v-for="movie in store.movies" :key="movie.id">
                <CurrentCard v-bind="movie" />
            </div>
        </div>
        <h1 class="mt-5">SERIE TV</h1>
        <div class="divider mb-2"></div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div class="col p-3" v-for="serie in store.series" :key="serie.id">
                <CurrentCard v-bind="serie" />
            </div>
        </div>
    </section>
</template>

<style scoped>
h1 {
    color: white;
}

.divider {
    border: 1px solid red;
    width: 200px;
}
</style>