<script setup>
import GrandParent1 from '@/components/Props/GrandParent.vue';
import GrandParent2 from '@/components/Provide-Inject/GrandParent.vue';
import GrandParent3 from '@/components/Store/GrandParent.vue'
</script>

<template>
	<main>
		<section>
			<GrandParent1></GrandParent1>
		</section>

		<section>
			<GrandParent2></GrandParent2>
		</section>

		<section>
			<GrandParent3></GrandParent3>
		</section>
	</main>
</template>

<style scoped>

main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: var(--size-700);

	padding: var(--size-700);
}

</style>