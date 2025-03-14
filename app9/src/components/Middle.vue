<script setup>
import Tabs from './Tabs-v2.vue';
import CompI from './tabs/CompI.vue';
import CompII from './tabs/CompII.vue';

const tabs = [
    { title: 'I', component: CompI },
    { title: 'II', component: CompII }
]
</script>

<template>
    <section>
        <h1 class="title">Dynamic Components 2</h1>
        <Tabs :tabs :selected-index="1" />
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