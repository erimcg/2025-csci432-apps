<script setup>
    import { RouterLink } from 'vue-router';
    import Logo from './Logo.vue'
</script>

<template>
        <div class="container spread padding-block-700">
            <Logo>
                <template #logoTitle>
                    <slot name="logoTitle"></slot>
                </template>
            </Logo>
            <slot name="links"></slot>
        </div>
</template>

<style scoped>

:slotted(*) {
    font-size: var(--fs-600);
}

</style>