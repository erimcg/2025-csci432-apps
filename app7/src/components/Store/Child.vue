<script setup>
import { watch, watchEffect } from 'vue'
import { username } from './store.js'

//watch(username, () => console.log('Store', username.value))
watchEffect(() => console.log('Store', username.value))

function click() {
    username.value = "Bad bunny"
}

</script>

<template>
    <div class="child" @click="click">
        <h1>{{ username }}</h1>
    </div>
</template>

<style scoped>
.child {
    background-color: var(--clr-accent-300);
}
</style>