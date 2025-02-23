<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter} from 'vue-router'

const router = useRouter()

// The array below can be filled with data retrieved from an API server
const users = ref([
    {
        id: '1111111111',
        name: 'Larry'
    },
    {
        id: '2222222222',
        name: 'Curly'
    },
    {
        id: '3333333333',
        name: 'Moe'
    }
])

</script>

<template>
    <div class="menu">
        <button @click="router.push({ path: '/' })">Home</button>

        <RouterLink v-for="user in users" :to="`/user/${user.id}?name=${user.name}`">
            {{ user.name }} {{ user.name }}
        </RouterLink>

    </div>
</template>

<style scoped>
.menu {
    display: flex;
    gap: var(--size-700)
}

@media (min-width: 50em) {
    .menu {
        flex-direction: column;
        align-items: center;
    }
}
</style>