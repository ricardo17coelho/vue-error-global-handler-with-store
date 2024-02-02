<template>
  <!-- Example without <keep-alive /> -->
  <ErrorContainer v-if="errorStore.isError" :error="errorStore.error" />
  <RouterView v-else />

  <!-- Example with <keep-alive /> -->
  <!-- <KeepAlive>
    <ErrorContainer v-if="errorStore.error" />
    <RouterView v-else />
  </KeepAlive> -->
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import ErrorContainer from './components/ErrorContainer.vue'

import { useErrorStore } from '@/stores/error'

const errorStore = useErrorStore()
</script>
