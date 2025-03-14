<script setup>
import Tabs from './Tabs-v1.vue';

const tabs = [
    { title: 'One', componentName: 'CompOne' },
    { title: 'Two', componentName: 'CompTwo' }
]
</script>

<template>
    <section>
        <h1 class="title">Dynamic Components 1</h1>
        <Tabs :tabs :selected-index="0" />
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;

    align-items: center;
}

.title {
    font-weight: var(--fw-bold);
}
</style>