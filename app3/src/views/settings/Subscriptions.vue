<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <div class="menu">    
        <div class="flex align-center" @click="router.back()">
            <img src="../../assets/icons/arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" class="icon back-button"></img>
            <span class="menu-section">My subscriptions</span>
        </div>
    </div>
</template>

<style>


</style>