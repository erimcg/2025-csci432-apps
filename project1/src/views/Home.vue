<script setup>
import Header from '../components/Header.vue'
</script>

<template>
    <Header>
        <nav>
            <RouterLink to="/Login">Login</RouterLink>
        </nav>
    </Header>

    <main class="padding-block-700">
        <section class="container">
            <h1 class="fs-primary-heading">Home</h1>
        </section>

        <section class="container">
            <p>Welcome to me home.</p>
        </section>
    </main>
</template>


