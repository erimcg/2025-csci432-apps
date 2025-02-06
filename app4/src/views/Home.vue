<script setup>
import { ref } from 'vue'

import Toast from '@/components/Toast.vue';
import Modal from '@/components/Modal.vue';
import Gunner from '@/components/Gunner.vue'

// Toast
const message = ref('')

// Modal
const modal = ref(null)

function cancel() {
	message.value = 'Cancelled'
	modal.value.close()
}

function save() {
	message.value = 'Saved ' + name.value
	modal.value.close()
}

const name = ref('')

</script>

<template>
	<main class="flex col justify-center align-center">
		<button @click="modal.open()">
			<img src="../assets/icons/add_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" class="icon" />
		</button>
		
		<Toast :message></Toast>

		<Gunner></Gunner>
	</main>

	<Modal ref="modal">
		<template #header>
			<h1 class="primary-heading">Title</h1>
		</template>
		<template #main>
			<input v-model="name" type="text">
		</template>
		<template #footer>
			<button @click.stop="cancel">Cancel</button>
			<button @click.stop="save">Save</button>
		</template>
	</Modal>

</template>

<style scoped>

main {
	height: 100%;
	position: relative;
}

</style>