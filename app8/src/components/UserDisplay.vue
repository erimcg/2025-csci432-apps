<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()
const { wholeName, userName } = storeToRefs(userStore)
</script>

<template>
    <div>
        <h1>Name: {{ wholeName }}</h1>
        <h3>Username: {{ userName }}</h3>
    </div>
</template>
