<script setup>
import { Suspense } from 'vue';
import Tabs from './Tabs-v1.vue';

const tabs = [
    { title: 'A', componentName: 'CompA' },
    { title: 'B', componentName: 'CompB' }
]
</script>

<template>
    <section>
        <h1 class="title">Dynamic Components 3</h1>
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