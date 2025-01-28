<script setup>
import Header from '../components/Header.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

async function signOut(event) {

	const token = localStorage.getItem("token")

	const url = 'https://hap-app-api.azurewebsites.net/user/logout'

	const options = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	let response = await fetch(url, options)

	if (response.ok) {
		if (response.status === 200) {
			//TODO: Remove token and username from localStorage

			router.push({
				name: 'home'
			})
		}
	} else {
		console.log("HTTP-Error: " + response.status)
	}
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

<style scoped>

a { text-decoration: none; }
a:hover { cursor: pointer; }

</style>