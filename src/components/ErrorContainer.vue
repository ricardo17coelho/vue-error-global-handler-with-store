<template>
  <h1>Oh no!</h1>
  <div>{{ error }}</div>
  <button @click="$router.push('/')">Go to Home</button>
</template>

<script lang="ts" setup>
defineProps({
  error: { type: Object, default: () => ({}) },
})
</script>

<style lang="postcss" scoped>
h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
</style>
