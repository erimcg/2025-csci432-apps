<script setup>
import UserForm from '@/components/UserForm.vue';
import UserDisplay from '@/components/UserDisplay.vue';
import UserActions from '@/components/UserActions.vue';
import UserLog from '@/components/UserLog.vue'

</script>

<template>
  <main class="container">
    <section>
      <UserForm></UserForm>
      <UserDisplay></UserDisplay>
    </section>

    <section>
      <UserActions></UserActions>
    </section>

    <section>
      <UserLog></UserLog>
    </section>
  </main>
</template>

<style scoped>

section {
  display: flex;
  gap: var(--size-400);

  margin-block: var(--size-400);
}

</style>
