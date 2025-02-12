<script setup>

const props = defineProps({ firstName: String, lastName: String, date: String })

</script>

<template>
    <div class="card">
        <h1 class="primary-heading">{{ firstName }} {{ lastName }}</h1>
        <span>{{ date }}</span>
    </div>

</template>

<style scoped>

.card {

    background-color: var(--clr-accent-400);
    color: var(--clr-neutral-100);

    width: 100%;
    min-height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>