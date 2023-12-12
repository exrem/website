<script setup>
const { locale } = useI18n(),
  languages = [
    { locale: 'az', name: 'Türkcä', flag: 'azerbaijan' },
    { locale: 'en', name: 'English', flag: 'england' },
    { locale: 'tr', name: 'Türkçe', flag: 'turkey' }
  ]
  
let selectedLanguage = ref(languages.find(lang => lang.locale == locale.value))

watch([locale], () => {
  selectedLanguage = ref(languages.find(lang => lang.locale == locale.value))
})
</script>

<template>
  <nav class='flex items-center py-4 xl:hidden'>
    <div class='w-1/3'></div>
    <NuxtLink class='flex justify-center w-1/3' to='/'>
      <NuxtImg class='m-auto w-auto h-8' src='/assets/imza.svg' />
    </NuxtLink>
    <div class='flex justify-end w-1/3 cursor-pointer'>
      <Icon class='w-auto h-6' name='material-symbols:menu-rounded' />
    </div>
  </nav>
  <nav class='hidden items-center gap-12 py-4 font-medium xl:flex'>
    <NuxtLink class='mr-8' to='/'>
      <NuxtImg class='w-auto h-8' src='/assets/imza.svg' />
    </NuxtLink>
    <NuxtLink class='underline-offset-4 hover:underline' to='/about'>{{ $t('title./about') }}</NuxtLink>
    <NuxtLink class='underline-offset-4 hover:underline' to='/projects'>{{ $t('title./projects') }}</NuxtLink>
    <NuxtLink class='underline-offset-4 hover:underline' to='/contact'>{{ $t('title./contact') }}</NuxtLink>

    <div class='ml-auto'>
      <HeadlessListbox v-model="locale">
        <HeadlessListboxButton class='flex items-center gap-2 p-2 bg-black text-white font-semibold shadow-button outline-none'>
          <Icon class='w-auto h-6' :name="`twemoji:flag-${selectedLanguage.flag}`" />
          {{ selectedLanguage.name }}
        </HeadlessListboxButton>
        <HeadlessListboxOptions class='absolute mt-2 outline-none'>
          <HeadlessListboxOption class='flex items-center gap-2 my-2 p-2 bg-white w-full border-2 border-black shadow-button cursor-pointer' v-for="lang in languages"
            :key="lang.locale" :value="lang.locale" :disabled="lang.locale == selectedLanguage.locale">
            <Icon class='w-auto h-6' :name="`twemoji:flag-${lang.flag}`" />
            {{ lang.name }}
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </HeadlessListbox>
    </div>
  </nav>
</template>