<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue';

const showModal = ref(false)

const message = ref('')
const showMessage = ref(false)

function openModal(e) {
	console.log('opening modal')
	showModal.value = true
}

function closeModal(e) {
	if (e.target !== e.currentTarget)
		return
 
	console.log('closing modal')
	showModal.value = false
}

function cancel() {
	showModal.value = false

	message.value = 'Cancelled'
	showMessage.value = true
	setTimeout(() => showMessage.value = false, 2000)
}

function save() {
	showModal.value = false

	message.value = 'Saved'
	showMessage.value = true
	setTimeout(() => showMessage.value = false, 2000)
}

</script>

<template>
	<main class="flex col justify-center align-center">
		<button @click="openModal">
			<img src="../assets/icons/add_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" class="icon" />
		</button>
		
		<span v-show="showMessage" class="toast">{{ message }}</span>

		<img class="runner" src="../assets/running_dog.gif">
	</main>

	<Modal v-show="showModal" @close.prevent="closeModal">
		<template #header>
			<h1 class="primary-heading">Title</h1>
		</template>
		<template #main>
			<p>Main</p>
		</template>
		<template #footer>
			<button @click="cancel">Cancel</button>
			<button @click="save">Save</button>
		</template>
	</Modal>

</template>

<style scoped>

main {
	height: 100%;
	position: relative;
}

.runner {
	position: absolute;
	left: -2000px;
	animation: 36s ease-in-out 0s infinite normal run;
}

@keyframes run {
	from {
		left: -8000px;
	}

	49% {
		transform: rotateY(0deg);
	}

	50% {
		left: 8000px;
		transform: rotateY(180deg);
	}

	to {
		left: -8000px;
		transform: rotateY(180deg);
	}
}

</style>