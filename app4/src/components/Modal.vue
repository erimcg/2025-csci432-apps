<script setup>
import { ref } from 'vue'

const showModal = ref(false)

defineExpose({
    open, close
})

function open() {
    showModal.value = true
}

function close(e) {
    console.log('on close')
    console.log('t: ' + e.target + ' ct: ' + e.currentTarget)
    showModal.value = false
}

</script>

<template>
    <div v-show="showModal" class="modal-backdrop" @click.self="close">
        <div class="modal">
            <header>
                <slot name="header"></slot>
                <img src="../assets/icons/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
                    class="icon button modal-button" @click.stop="close" />
            </header>

            <main>
                <slot name="main"></slot>
            </main>

            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--modal-backdrop-clr);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: var(--modal-background-clr);
    padding: var(--size-300);
}

.modal-button:hover {
    background-color: var(--clr-accent-200);
    border-radius: 50%;
}

header {
    display: flex;
    margin-bottom: var(--size-100);
    justify-content: space-between;
}

header > img {
    margin-left: var(--size-500);
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--size-400);
}

.highlight {
    background-color: yellow;
}
</style>