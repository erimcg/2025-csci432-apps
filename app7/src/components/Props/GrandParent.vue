<script setup>
import { ref } from 'vue'
import Parent from './Parent.vue';

const username = ref('')

const arr = ["Joe", "Alice", "Bob", "Eddie", "Mike"]
let index = Math.floor(Math.random() * arr.length)

function update() {
    username.value = arr[index]
    index = Math.floor(Math.random() * arr.length)
}

setInterval(update, 3000)

</script>

<template>
    <a href="https://vuejs.org/guide/components/props.html#props">Props</a> 
    
    <div class="grandparent-box">
        <h1>{{ username }}</h1>
        <Parent :username></Parent>
        </div>
</template>

<style scoped>
.grandparent-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-700);

    background-color: var(--clr-accent-100);
    padding: var(--size-700);
}
</style>