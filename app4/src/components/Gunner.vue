<script setup>

</script>

<template>
    <img class="gunner" src="../assets/gunner.gif">
</template>

<style scoped>

.gunner {
    position: fixed;
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