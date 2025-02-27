<script setup>
import { watch, watchEffect } from 'vue'
const props = defineProps({ username: String })

//watch(() => props.username, () => console.log('Props', props.username))
watchEffect(() => console.log('Props', props.username))

function click() {
    props.username = "Bad bunny"
}

</script>

<template>
    <div class="child-box" @click="click">
        <h1>{{ username }}</h1>
    </div>
</template>

<style scoped>
.child-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-700);

    background-color: var(--clr-accent-300);
    padding: var(--size-700);
}
</style>