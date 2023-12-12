<template>
  <main class='flex flex-col gap-8 justify-between items-center p-4 xl:flex-row'>
    <Card>
      <h1 class='mb-4 font-extrabold text-3xl xl:text-7xl'>Flick</h1>

      <p class='text-justify'>{{ $t('projects.flick') }}</p><br />
      <NuxtLink to='/go?to=flick'><Button>
        {{ $t('projects.visit-github-page') }}
        <Icon name='material-symbols:arrow-outward-rounded' />
      </Button></NuxtLink>
    </Card>
    
    <Card>
      <h1 class='mb-4 font-extrabold text-3xl xl:text-7xl'>Sözlük</h1>

      <p class='text-justify'>{{ $t('projects.sözlük') }}</p><br />
      <NuxtLink to='/go?to=sozluk'><Button>
        {{ $t('projects.visit-github-page') }}
        <Icon name='material-symbols:arrow-outward-rounded' />
      </Button></NuxtLink>
    </Card>
  </main>
</template>