<script setup lang="ts">
import { useLangStore } from './store'
import { useI18n } from 'vue-i18n'
import { watchEffect } from '#imports'

const i18n = useI18n()
const langStore = useLangStore()

watchEffect(() => {
  i18n.locale.value = langStore.language
})
</script>

<template>
  <NuxtPage />
</template>
