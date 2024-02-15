<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



export default {
    name: 'CurrentCard',
    data: () => ({
        imageuri: 'https://image.tmdb.org/t/p/w342',
        info: false,
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
        },
        showTheinfo() {
            this.info = true;
        }
    }
};
</script>

<template>
    <div class="current-card" @mouseover="this.info = true" @mouseleave="this.info = false">
        <img :src="this.imageuri + this.posterPath" :alt="title" class="img-fluid">
        <ul v-show="info">
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

<style lang="scss" scoped>
.current-card {
    color: white;
    position: relative;

    ul {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        margin-bottom: 0;
        padding-left: 0;
        list-style-type: none;
        text-align: center;
        background-color: rgba($color: #000000, $alpha: 0.7);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li img {
            width: 40px;
            height: 100%;
        }
    }
}

.fa-star {
    color: #ffc300;
}

.current-card img {
    border-radius: 10px;

}
</style>