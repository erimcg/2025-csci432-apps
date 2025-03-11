<script setup>

import { useUserStore } from '@/stores/user';
import { ref } from 'vue'

const userStore = useUserStore()
const log = ref([])
const logMutations = ref(false)
const logActions = ref(false)

userStore.$subscribe((mutation, state) => {
    if (logMutations.value === true) {
        // mutation type is 'direct' | 'patch object' | 'patch function'
        log.value.push(`${mutation.storeId} modified via ${mutation.type}`)
    }
})

userStore.$onAction(({ name, store, args, after, onError }) => {

    after((result) => {
        if (logActions.value === true) {
            log.value.push(`action success: ${name}`)
        }
    })

    onError((error) => {
        if (logActions.value === true) {
            log.value.push(`action failure: ${name}`)
        }
    })
})

function deleteLogs() {
    log.value = []
}
</script>

<template>
    <div>
        <div class="buttons">
            <div class="toggle">
                <span>Log mutations</span>
                <input type="checkbox" id="toggle" v-model="logMutations" />
                <label class="toggle-switch" for="toggle"></label>
            </div>

            <div class="toggle">
                <span>Log actions</span>
                <input type="checkbox" id="toggle2" v-model="logActions" />
                <label class="toggle-switch" for="toggle2"></label>
            </div>

            <button @click="deleteLogs">Delete logs</button>
        </div>

        <div class="logs">
            <h1 v-for="item of log">{{ item }}</h1>
        </div>
    </div>
</template>

<style>
.buttons {
    display: flex;
    gap: var(--size-200);
}

.logs{
    margin-top: var(--size-200);
}
.toggle {
    display: flex;
    align-items: center;
}

.toggle span {
    margin-right: var(--size-200);
}

input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
}

.toggle-switch {
    cursor: pointer;
    text-indent: -9999px;
    width: 60px;
    height: 33px;
    background: grey;
    display: inline-block;
    border-radius: 25px;
    position: relative;
}

.toggle-switch:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 23px;
    height: 23px;
    background: white;
    border-radius: 23px;
    transition: 0.3s;
}

input:checked+label {
    background: var(--clr-accent-400)
}

input:checked+label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
}
</style>