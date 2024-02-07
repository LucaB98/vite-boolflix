<script>
import SearchInput from './SearchInput.vue';

export default {
    name: 'AppHeader',
    components: { SearchInput }
};
</script>

<template>
    <header id="header" class="d-flex justify-content-between align-items-center mb-3">
        <img src="../assets/img/logo-complete.png" alt="boolflix">
        <SearchInput />
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