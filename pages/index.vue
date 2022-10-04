<script setup lang="ts">
import { useLangStore, useMainStore } from '~/store'
import { useI18n } from 'vue-i18n'
import { watchEffect } from '#imports'

const i18n = useI18n()

const mainStore = useMainStore()
const langStore = useLangStore()

watchEffect(() => {
  i18n.locale.value = langStore.language
})

const handleLang = (lang) => {
  langStore.setLanguage(lang)
}
</script>

<template>
  <div>
    <h1>{{ $t('hello') }}</h1>
    <q-btn color="secondary" label="EN" @click="handleLang('en')" />
    <q-btn color="secondary" label="RU" @click="handleLang('ru')" />
    <q-btn color="primary" label="Increment" @click="mainStore.increment()" />
    <q-space />
    <div>{{ mainStore.counter }}</div>
  </div>
</template>
