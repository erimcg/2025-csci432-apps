<script setup>
import Header from '../components/Header.vue'
import { ref , reactive } from 'vue'

const count = ref(10)

function increment() {
	count.value++
}

const fontColor = ref('green')

const styleObject = ref({
	color: 'orange',
	fontSize: '30px'
})

function emptyClassList() {
	document.querySelector("#a1").classList = ''
}

const title = ref('Nightmare on Elm Street')
const username = ref('freddy')
const address = ref('1428 Main Street')

function reset(e) {
	title.value = 'Nightmare on Elm Street'
	username.value = 'freddy'
	address.value = "1428 Main Street"
}


</script>

<template>
	<Header>
		<template #logoTitle>
			<div id="title">Vue</div>
			<div id="subtitle">Refs, v-bind & v-model</div>
		</template>

		<template #links>

		</template>
	</Header>

	<main class="container">
		<section>
			<h1>Count: {{ count }} </h1>
			<button @click="increment">Increment</button>
		</section>

		<section>
			<h1>Count: {{ count * 2 }} </h1>
			<button @click="count++">Increment</button>
		</section>

		<section>
			<h1 id="a1" v-bind:class="fontColor">fontColor: {{ fontColor }}</h1>
			<div>
				<button @click="fontColor = (fontColor === 'red') ? 'green' : 'red'">Change Ref</button>
				<button @click="emptyClassList">Empty class list</button>
			</div>
		</section>

		<section>
			<h1 :style="{ color: fontColor }">fontColor: {{fontColor }}</h1>
		</section>

		<section>
			<h1 :style="styleObject">binding obj to style</h1>
			<div>
				<button @click="styleObject.color = 'blue'">Blue</button>
				<button @click="styleObject.color = 'red'">Red</button>
			</div>
		</section>

		<section>
			<h1>Count is {{ count % 2 === 0 ? "even" : "odd" }}</h1>
			<button :disabled="count % 2 === 0">Disabled if count even</button>
		</section>

		<section>
			<h1>{{ title }}</h1>
			<input type="text" :value="title" size="30" v-memo="[title]">
			<button @click="title += String.fromCodePoint(0x1f52a)">Append to ref</button>
		</section>

		<section>
			<h1>{{ username }}</h1>
			<input type="text" :value="username" @input="e => username = e.target.value">
		</section>

		<section>
			<h1>{{ address }}</h1>
			<input type="text" v-model="address">
		</section>

		<section>
			<button @click="reset">Reset</button>
		</section>


	</main>
</template>

<style scoped>

main {
	font-size: 1.5rem;
	display: grid;
	gap: 1rem;
	margin: 0 auto;
}

@media (min-width: 800px) {
	main {
		grid-template-columns: repeat(2, 1fr);
	}
}

section {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: antiquewhite;
	padding: 20px;
}

input {
	margin-bottom: 10px;
}

.red {
	color: red
}

.green {
	color: rgb(30, 245, 30)
}


</style>
