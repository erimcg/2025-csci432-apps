<script setup>

</script>

<template>
	<main>
		<section class="grid-panel topPanel">
			<RouterView name="topPanel"></RouterView>
		</section>

		<section class="grid-panel middlePanel vline">
			<RouterView name="middlePanel"></RouterView>
		</section>

		<section class="grid-panel bottomPanel vline">
			<RouterView name="bottomPanel"></RouterView>
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

.grid-panel {
	padding: var(--size-300);
	margin: var(--size-300);

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

	.middlePanel {
		grid-row-start: 1;
		grid-column-start: 2;
	}

	.bottomPanel {
		grid-row-start: 1;
		grid-column-start: 3;
	}

}
</style>