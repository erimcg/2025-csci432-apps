<script setup>
import { defineAsyncComponent } from 'vue';
import Tabs from './Tabs-v2.vue';

const tabs = [
    {
        title: 'A', component: defineAsyncComponent(() =>
            import('./tabs/CompA.vue')
        )},
    {
        title: 'B', component: defineAsyncComponent(() =>
            import('./tabs/CompB.vue')
        )}
]
</script>

<template>
    <section>
        <h1 class="title">Dynamic Components 3</h1>
        <Suspense>
            <Tabs :tabs :selected-index="0" />
        </Suspense>
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