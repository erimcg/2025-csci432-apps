import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const firstName = ref('')
  const lastName = ref('')
  const userName = ref('')

  const wholeName = computed(() => firstName.value + ' ' + lastName.value)

  function setUser(fName, lName, uName) {
    firstName.value = fName ?? ''
    lastName.value = lName ?? ''
    userName.value = uName ?? ''
  }

  function $reset() {
    firstName.value = ''
    lastName.value = ''
    userName.value = ''
  }

  return { firstName, lastName, userName, wholeName, setUser, $reset }
})
