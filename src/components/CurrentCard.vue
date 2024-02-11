<script>


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

    }

};
</script>

<template>
    <div class="current-card">
        <img :src="imageuri + this.posterPath" :alt="title" class="img-fluid">
        <ul>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li>
                <img v-if="hasFlag" :src="flagSrc" :alt="lang">
                <span v-else>{{ lang }}</span>
            </li>
            <li>{{ voteAverage }}</li>
        </ul>
    </div>
</template>

<style scoped>
.current-card img {
    border-radius: 10px;
}
</style>