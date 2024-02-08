<script>
import SearchInput from './SearchInput.vue';

export default {
    name: 'AppHeader',
    components: { SearchInput },
    emits: ['read-submit', 'term-changed']
};
</script>

<template>
    <header id="header" class="d-flex justify-content-between align-items-center mb-3">
        <img src="../assets/img/logo-complete.png" alt="boolflix">
        <SearchInput @form-submit="$emit('read-submit')" @term-change="$emit('term-changed', $event)" placeholder="Cerca..."
            button-label="Cerca" />
    </header>
</template>

<style scoped>
#header {
    height: 100px;
    background-color: rgb(31, 31, 31);
}

img {
    width: 300px;
    height: auto;
}
</style>