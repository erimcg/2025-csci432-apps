<script setup>
import Child from './Child.vue';

const props = defineProps({ username: String })
</script>

<template>
    <div class="parent-box">
        <h1>{{ username }}</h1>
        <Child :username></Child>
    </div>
</template>

<style scoped>
.parent-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-700);

    background-color: var(--clr-accent-200);
    padding: var(--size-700);
}

</style>