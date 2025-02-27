<script setup>
import { provide, ref } from 'vue'
import Parent from './Parent.vue';

const username = ref('')

const arr = ["Joe", "Alice", "Bob", "Eddie", "Mike"]
let index = Math.floor(Math.random() * arr.length)

function update() {
    username.value = arr[index]
    index = Math.floor(Math.random() * arr.length)
}

setInterval(update, 3000)

provide('username', username)

</script>

<template>
    <a href="https://vuejs.org/guide/components/provide-inject.html#provide-inject">Provide & Inject</a> 
    
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