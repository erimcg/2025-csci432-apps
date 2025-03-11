<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { lastName, userName } = storeToRefs(userStore)

</script>

<template>
    <fieldset>
        <legend>User</legend>

        <label>First name</label>
        <input type="text" v-model="userStore.firstName">

        <label>Last name</label>
        <input type="text" v-model="lastName">

        <label>Username</label>
        <input type="text" v-model="userName">
    </fieldset>
</template>

<style scoped>
fieldset {
    padding: var(--size-200);
}
input {
    display: block;
}
</style>