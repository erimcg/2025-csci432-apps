<script setup>
import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'

const props = defineProps({
    id: String
})

const route = useRoute()
const name = ref('')

const showChatLink = ref(false)

// The watcher's callback is run whenever this component
// is visible and the route changes

watch(route, (route) => {
    console.log('route changed')
    console.log(route.path)

    if (route.query.hasOwnProperty('name')) {
        // must be at /usr/:id?name=xxx
        name.value = route.query.name
        showChatLink.value = true
    }
    else {
        showChatLink.value = false
    }
}, { immediate: true })

</script>

<template>
    <div class="card">
        <h1 class="primary-heading">{{ name }}</h1>
        <span class="secondary-heading">id: {{ id }}</span>

        <RouterLink v-show="showChatLink" :to="`/user/${id}/chat`">Send Private Message</RouterLink>
    </div>

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
    align-items: center;
}

@media (min-width: 50em) {
    .card {
        width: 100%;
    }
}

</style>