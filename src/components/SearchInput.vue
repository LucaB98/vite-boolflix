<script>
export default {
    name: 'SearchInput',
};
</script>

<template>
    <form class="m-3">
        <input type="text" class="search">
        <button class="btn">Cerca</button>
    </form>
</template>

<style scoped>
.search {
    margin-right: 10px;
}

.btn {
    background-color: red;
    color: white;
    font-size: 18px;
}
</style>