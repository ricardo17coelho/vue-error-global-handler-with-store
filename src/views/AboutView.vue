<template>
  <div>
    <h1>This is the About Page</h1>
    <button @click="$router.push('/')">Go to Home</button>
    <button @click="onCreateError">Create error</button>
  </div>
</template>
<script lang="ts" setup>
import { useErrorStore } from '@/stores/error'

const errorStore = useErrorStore()

function onCreateError() {
  errorStore.create({ msg: 'Bad error' })
}
</script>
