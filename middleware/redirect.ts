const redirect = (linkAlias: string) => ({
  discord: 'https://discord.com/users/339514931277856778',
  flick: 'https://github.com/flicktogether',
  github: 'https://github.com/exrem',
  instagram: 'https://instagram.com/erayreperit',
  mail: 'mailto:akremjafar@outlook.com',
  reddit: 'https://reddit.com/u/eraykim',
  repo: 'https://github.com/exrem/exrem.github.io',
  sozluk: 'https://github.com/exrem/sozluk',
  spotify: 'https://sptfy.com/erayreperit',
  twitter: 'https://twitter.com/erayreperit',
  youtube: 'https://youtube.com/@atmosph'
}[linkAlias])

export default defineNuxtRouteMiddleware(({ query }) => {
  const goTo = query.to as string

  navigateTo(redirect(goTo) ?? '/', {
    external: true
  })
})