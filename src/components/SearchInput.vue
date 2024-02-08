<script>
export default {
    name: 'SearchInput',
    data: () => ({ term: '' }),
    props: {
        placeholder: String,
        buttonLabel: String,
    },
    emits: ['form-submit', 'term-change']
};
</script>

<template>
    <form class="m-3" @submit.prevent="$emit('form-submit')">
        <input type="text" class="search" v-model.trim="term" :placeholder="placeholder"
            @keyup="$emit('term-change', term)">
        <button class="btn">{{ buttonLabel }}</button>
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