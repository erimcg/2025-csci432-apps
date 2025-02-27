<script setup>
import { username } from './store.js'
import Parent from './Parent.vue';

</script>

<template>
    <a href="https://vuejs.org/guide/scaling-up/state-management.html">Reactivity API</a> &
    <a href="https://vuejs.org/guide/essentials/computed.html">Computed Properties</a>

    <div class="grandparent">
        <h1>{{ username }}</h1>
        <Parent></Parent>
    </div>
</template>

<style scoped>
:deep(div),div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-700);
    padding: var(--size-700);
}

.grandparent {
    background-color: var(--clr-accent-100);
}
</style>