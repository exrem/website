<script setup>
const { path } = useRoute(),
  { availableLocales, locale, t } = useI18n()

onMounted(() => {
  const usersLanguage = navigator.language.split('-')[0]

  if (availableLocales.includes(usersLanguage)) locale.value = usersLanguage
})

useHead ({
  htmlAttrs: {
    lang: locale.value
  },
  title: t(`title.${path}`)
})
</script>

<template>
  <AppNavigation />
  <NuxtPage :page-key="route => route.fullPath" />
  <AppFooter />
</template>