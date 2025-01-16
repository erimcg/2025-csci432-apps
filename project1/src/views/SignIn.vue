<script setup>
import Header from '../components/Header.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function signIn (event) {
	// do some input validation

	router.push({
		name: 'main'
	})
}

</script>

<template>
	<Header>
		<nav>
			<RouterLink to="/">Home</RouterLink>
		</nav>
	</Header>

	<main class="padding-block-700">
		<section class="container center">
			<button class="button" @click="signIn">Sign In</button>
		</section>
	</main>
</template>

<style scoped>
:deep(a) {
	text-decoration: none;
}
</style>
