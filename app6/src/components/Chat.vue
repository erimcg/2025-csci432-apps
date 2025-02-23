<script setup>
import { ref, useTemplateRef } from 'vue'
import Toast from '@/components/Toast.vue'

const props = defineProps({
    id: String
})

const toast = useTemplateRef('toast')

const textMessage = ref('')

let i = 0

function send() {
    toast.value.setMessage(`Message sent to ${props.id}`)
    textMessage.value = ''
}
</script>

<template>
    <div class="card">
        <img @click="$router.back()" class="close" src="@/assets/icons/close.svg" />

        <label class="secondary-heading label" for="message">Private Message</label>
        <input type="text" @keyup.enter="send" v-model="textMessage" id="message"/>
    </div>

    <Toast ref="toast"></Toast>

</template>

<style scoped>

.card {
    background-color: var(--clr-accent-400);
    color: var(--clr-neutral-100);

    width: 50%;
    padding: var(--size-400);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
}

.label {
    margin-bottom: var(--size-400);
}

.close {
    align-self: self-end;
}

@media (min-width: 50em) {
    .card {
        width: 100%;
    }
}
</style>