import { ref } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useErrorStore = defineStore('error', () => {
  const isError = ref(false)
  const error = ref<Error | any>()

  function create(e: Error | any) {
    isError.value = true
    error.value = e
  }

  return {
    // state
    isError,
    error,
    // actions
    create,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot))
}
