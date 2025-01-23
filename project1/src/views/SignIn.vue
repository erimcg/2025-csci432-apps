<script setup>
import Header from '../components/Header.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

async function signIn(e) {
	e.preventDefault()

	// TODO: get email and password from the form
	const email = "joe1@example.com"
	const password = "test1234"

	const data = { email, password }

	const url = 'https://hap-app-api.azurewebsites.net/user/login'

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}

	let response = await fetch(url, options)

	if (response.status === 200) {
		const data = await response.json()

		localStorage.setItem("token", data.token)
		console.log(data)

		//TODO: Store username in localStorage as well

		router.push({
			name: 'main'
		})
	}
	else if (response.status === 400) {
		// TODO: Display error message to screen
		console.log("Invalid email or password.")
	}
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
