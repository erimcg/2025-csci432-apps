<script setup>
import { ref } from 'vue'

const props = defineProps({
    tabs: {
        type: Array,
        validator(arr) {
            return arr.length > 0
        }
    },
    selectedIndex: {
        type: Number,
        required: true
    }
})

const selectedIndex = ref(props.selectedIndex)
</script>
   
<template>
    <div>
        <ul class='tab-bar'>
            <li v-for="(tab, index) in tabs" :key="tab.title" @click="selectedIndex = index"
                :class='{"tab-selected": (index==selectedIndex)}'>
                {{ tab.title }}
            </li>
        </ul>

        <component :is="tabs[selectedIndex].componentName"></component>
    </div>
</template>

<style scoped>
ul.tab-bar {
    display: block;
    list-style: none;
    margin: 0 0 0 20px;
    padding: 10px 0;
}

ul.tab-bar>li {
    padding: 15px 30px;
    border-radius: 10px;
    margin: 0;
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
}

ul.tab-bar>li.tab-selected {
    font-weight: bold;
    background-color: var(--clr-neutral-200);
}
</style>