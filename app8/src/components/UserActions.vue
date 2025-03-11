<script setup>
import { useUserStore } from '@/stores/user'
import { resetStores } from '@/composables/reset';

const userStore = useUserStore()

const { setUser } = userStore

function login() {
    setUser('Phillip', 'Mufflesberger', 'Bob')
}

function patch() {
    userStore.$patch((state) => {
        state.firstName = 'Cecil'
    })
}

function resetUserStore() {
    userStore.$reset()
}
</script>

<template>
    <div>
        <button @click="login">Login</button>
        <button @click="patch">Patch state</button>
        <button @click="resetUserStore">Reset store</button>
        <button @click="resetStores">Reset app</button>
    </div>
</template>