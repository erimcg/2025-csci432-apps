<script setup>
import Left from '@/components/Left.vue'
import Middle from '@/components/Middle.vue';
import Right from '@/components/Right.vue';
</script>

<template>
  <main>
    <Left />
    <Middle />
    <Right />
  </main>
</template>

<style scoped>
main {
  display: flex;
  gap: var(--size-700);

  padding: var(--size-800);
}
</style>
