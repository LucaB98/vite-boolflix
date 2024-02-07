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
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div class="col" v-for="movie in store.movies" :key="movie.id">
                <CurrentCard :image="movie.poster_path" :name="movie.title" />
            </div>
        </div>
    </section>
</template>

<style scoped></style>