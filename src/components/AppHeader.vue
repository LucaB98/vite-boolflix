<script>
import SearchInput from './SearchInput.vue';

export default {
    name: 'AppHeader',
    components: { SearchInput }
};
</script>

<template>
    <header>
        <img src="../assets/" alt="">
        <SearchInput />
    </header>
</template>

<style scoped></style>