<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



export default {
    name: 'CurrentCard',
    data: () => ({
        imageuri: 'https://image.tmdb.org/t/p/w342',
    }),
    props: {
        id: Number,
        title: String,
        originalTitle: String,
        voteAverage: Number,
        lang: String,
        posterPath: String || null,
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.lang);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.lang}.png`, import.meta.url);
            return url.href;
        },
        vote() {
            return Math.ceil(this.voteAverage / 2);
        }
    },
    components: { FontAwesomeIcon },
    methods: {
        iconStyle(n) {
            return n <= this.vote ? 'fas' : 'far';
        }
    }
};
</script>

<template>
    <div class="current-card">
        <img :src="this.imageuri + this.posterPath" :alt="title" class="img-fluid">
        <ul>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li>
                <img v-if="hasFlag" :src="flagSrc" :alt="lang">
                <span v-else>{{ lang }}</span>
            </li>
            <li>
                <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconStyle(n), 'star']" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.current-card {
    color: white;
}

.fa-star {
    color: white;
}

.current-card img {
    border-radius: 10px;

}
</style>