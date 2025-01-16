<script setup>
import Header from '../components/Header.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function signOut(event) {
	// maybe remove something from localStorage?
	console.log("clicked")

	router.push({
		name: 'home'
	})
}
</script>

<template>
	<Header>
		<nav>
			<a @click="signOut">Sign Out</a>
		</nav>
	</Header>

	<main class="padding-block-700">
		<section class="container center">
			<h1 class="fs-primary-heading">Welcome Joe!</h1>
		</section>
	</main>
</template>
