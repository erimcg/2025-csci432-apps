<script setup>
import Header from '../components/Header.vue'
</script>

<template>
    <Header>
        <nav>
            <RouterLink to="/signin">Sign In</RouterLink>
        </nav>
    </Header>

    <main class="padding-block-700">
        <section class="container center vertical">
            <h1 class="fs-primary-heading">Home</h1>
            <p>Welcome to me home.</p>
        </section>
    </main>
</template>

<style scoped>

:deep(a) {
    text-decoration: none;
}

</style>


