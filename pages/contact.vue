<template>
  <main class='flex justify-center items-center p-4'>
    <Card>
      <h1 class='mb-4 font-extrabold text-3xl xl:text-7xl'>{{ $t('title./contact') }}</h1>

      <p>{{ $t('contact.contact') }}</p><br />

      <NuxtLink to='/go?to=mail'><Button>
        {{ $t('contact.email') }}
        <Icon name='material-symbols:arrow-outward-rounded' />
      </Button></NuxtLink>
    </Card>
  </main>
</template>