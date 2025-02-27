<script setup>
import Child from './Child.vue';

const username = String.fromCodePoint(parseInt('1F60E', 16))

</script>

<template>
    <div class="parent">
        <h1>{{ username }}</h1>
        <Child></Child>
    </div>
</template>

<style scoped>
.parent {
    background-color: var(--clr-accent-200);
}

h1 {
    font-size: var(--fs-800);
}
</style>