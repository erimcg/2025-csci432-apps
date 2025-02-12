<script setup>
import { ref } from 'vue'
import Message from '../components/Message.vue'

/* Example 1 */
const firstName = ref('Joe')
const lastName = ref('Smith')
const date = ref('1970-01-01T00:00:00.000Z')

const formatDate = (dateString) => {
	return new Date(dateString).toLocaleString("en-US", { timeZone: 'America/New_York' }) + " EST"
}

/* Example 2 */
const items = ref([
	{
		"firstName": "T",
		"lastName": "Martin",
		"date": '1970-01-01T00:00:00.000Z'
	},
	{
		"firstName": "Butler",
		"lastName": "Paul",
		"date": '1969-12-30T19:00:00.000-05:00'
	},
	{
		"firstName": "K",
		"lastName": "W",
		"date": '1970-01-03T06:00:00.000Z'
	}
])

/* Example 3 */
const newFirstName = ref('')
const newLastName = ref('')
const newDate = ref('')

function add() {
	items.value.push({
		firstName: newFirstName.value,
		lastName: newLastName.value,
		date: new Date(newDate.value).toISOString()
	
	})
	
	console.log(items.value[items.value.length - 1])

	newFirstName.value = ''
	newLastName.value = ''
	newDate.value = ''
}

</script>

<template>
	<main>
		<section class="grid-panel">
			<h1 class="primary-heading">A Single Card</h1>
			<Message :first-name :last-name :date="formatDate(date)"></Message>
		</section>

		<section class="grid-panel middle vline">
			<h1 class="primary-heading">A List of Cards</h1>
			<Message v-for="item in items" 
				:first-name="item.firstName" 
				:last-name="item.lastName"
				:date="formatDate(item.date)"></Message>
		</section>

		<section class="grid-panel bottom vline">
			<div class="form">
				<h1 class="primary-heading">Add New Card</h1>
				<div>
					<div>
						<h1 class="secondary-heading">First name</h1>
						<input v-model="newFirstName">
					</div>
					<div>
						<h1 class="secondary-heading">Last name</h1>
						<input v-model="newLastName">
					</div>
					<div>
						<h1 class="secondary-heading">Date</h1>
						<input type="datetime-local" v-model="newDate">
					</div>
				</div>
				<div class="flex justify-content">
					<button class="button" @click="items.pop()">Pop</button>
					<button class="button" @click="add">Push</button>
				</div>
			</div>

		</section>
	</main>
</template>

<style scoped>
main {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto auto;

	margin-block: var(--size-700);
}

.middle {
	grid-row-start: 3;
}

.bottom {
	grid-row-start: 2;
}

.grid-panel {
	padding: var(--size-300);
	margin: var(--size-300);

	display: flex;
	flex-direction: column;
	gap: 5px;

	align-items: center;
}

.form {
	background-color: var(--clr-neutral-200);
	width: 100%;
	padding-block: var(--size-700);

	display: flex;
	flex-direction: column;
	gap: 5px;

	align-items: center;
}

@media (min-width: 50em) {
	main {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
	}

	.vline {
		border-left: 1px lightgrey solid;
	}

	.middle {
		grid-row-start: 1;
		grid-column-start: 2;
	}

	.bottom {
		grid-row-start: 1;
		grid-column-start: 3;
	}

}
</style>