<script setup>
import { ref, watch } from 'vue';

const showToast = ref(false)

const props = defineProps({
    message: { type: String, required: true }
})

watch(() => props.message, async (newValue, oldValue) => {
    showToast.value = true
    setTimeout(() => showToast.value = false, 2000)
})
</script>

<template>
    <span v-show="showToast" class="toast">{{ message }}</span>
</template>


<style>
.toast {
    position: fixed;
    bottom: 20%;

    padding: 0.25em 1.5em;
    background-color: var(--clr-neutral-200);
}
</style>