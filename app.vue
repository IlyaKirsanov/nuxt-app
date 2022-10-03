<script setup lang="ts">
import { useMainStore } from './store'

const mainStore = useMainStore()
</script>

<template>
  <div>
    <h1>Hello Nuxt 3!</h1>
    <q-btn color="primary" label="Increment" @click="mainStore.increment()" />
    <h6>{{ mainStore.counter }}</h6>
    <q-space />
    <h6>{{ mainStore.getDoubleCounter }}</h6>
  </div>
</template>
