<script setup>
const { data } = await useFetch('/api/spotify/playing')
</script>

<template>
  <footer class='flex flex-col mt-12 p-12 bg-black text-white'>
    <div class='flex flex-col gap-24 xl:flex-row'>
      <div class='flex flex-col gap-4'>
        <h1 class='font-extrabold text-3xl'>Äkräm Ca'fär</h1>
        <div class='flex items-start gap-2' v-if="data">
          <Icon class='w-auto h-5' name='simple-icons:spotify' />
          <div class='flex flex-col'>
            <span class='leading-none'>{{ $t('footer.listening') }}</span>
            <span class='leading-loose'>{{ data.artists.map(artist => artist.name).join(', ') }} — {{ data.name }}</span>
          </div>
        </div>
        <span v-else>{{ $t('footer.not-listening') }}</span>
      </div>
      <div class='flex flex-col gap-1'>
        <h1 class='text-xl font-bold'>{{ $t('footer.name') }}</h1>
        <NuxtLink class='underline-offset-4 hover:underline' to='/'>{{ $t('title./') }}</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/about'>{{ $t('title./about') }}</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/contact'>{{ $t('title./contact') }}</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/projects'>{{ $t('title./projects') }}</NuxtLink>
      </div>
      <div class='flex flex-col gap-1'>
        <h1 class='text-xl font-bold'>{{ $t('footer.external') }}</h1>
        <NuxtLink class='underline-offset-4 hover:underline' to='/go?to=discord'>Discord</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/go?to=github'>GitHub</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/go?to=instagram'>Instagram</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/go?to=reddit'>Reddit</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/go?to=spotify'>Spotify</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/go?to=twitter'>Twitter</NuxtLink>
        <NuxtLink class='underline-offset-4 hover:underline' to='/go?to=youtube'>YouTube</NuxtLink>
      </div>
    </div>
    <hr class='my-6 border-white' />
    <NuxtLink to='/go?to=repo'>
      {{ $t('footer.github') }}
      <Icon name='material-symbols:arrow-outward-rounded' />
    </NuxtLink>
  </footer>
</template>