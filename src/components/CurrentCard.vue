<script>
const imageuri = 'https://image.tmdb.org/t/p/w342'

export default {
    name: 'CurrentCard',
    props: {
        image: String,
        name: String,
    },

};
</script>

<template>
    <div class="current-card">
        <img :src="'https://image.tmdb.org/t/p/w342' + image" :alt="name" class="img-fluid">
    </div>
</template>

<style scoped>
.current-card img {
    border-radius: 10px;
}
</style>