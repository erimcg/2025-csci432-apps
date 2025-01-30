<script setup>
    import { RouterLink } from 'vue-router';
    import Logo from './Logo.vue'
</script>

<template>
    <header class="padding-block-700">
        <div class="container spread">
            <Logo>
                <template #logoTitle>
                    <slot name="logoTitle"></slot>
                </template>
            </Logo>
            <slot name="links"></slot>
        </div>
    </header>
</template>

<style scoped>

:slotted(*) {
    font-size: var(--fs-600);
}

</style>