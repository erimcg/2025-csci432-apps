<script setup>
import { ref, watch } from 'vue';

const message = ref('')

function setMessage(mssg) {
    message.value = mssg
}

defineExpose({
    setMessage
})

const showToast = ref(false)

watch(message, async (newValue, oldValue) => {
    console.log('toast changed')
    console.log(message.value)
    if (message.value.length > 0) {
        showToast.value = true
        setTimeout(() => {
            console.log('resetting toast')
            showToast.value = false
            message.value = ''
        }, 2000)
    }
}, { immediate: true })
</script>

<template>
    <span v-show="showToast" class="toast">{{ message }}</span>
</template>


<style>
.toast {
    font-size: var(--fs-200);
    padding: 0.25em 1.5em;
    background-color: var(--clr-accent-300);
    color: var(--clr-primary-700)
}
</style>