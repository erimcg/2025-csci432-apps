import { ref, computed } from 'vue'

const name = ref('')

const arr = ["Joe", "Alice", "Bob", "Eddie", "Mike"]
let index = Math.floor(Math.random() * arr.length)

function update() {
    name.value = arr[index]
    index = (index + 1) % arr.length
}

setInterval(update, 3000)

export const username = computed(() => name)