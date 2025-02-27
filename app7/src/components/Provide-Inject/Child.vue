<script setup>
import { inject, watchEffect } from 'vue';

const username = inject('username')

//watch(username, () => console.log('Inject', username.value))
watchEffect(() => console.log('Inject', username.value))

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