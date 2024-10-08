const redirect = (linkAlias: string) => ({
  discord: 'https://discord.com/users/339514931277856778',
  flick: 'https://github.com/byflick',
  github: 'https://github.com/exrem',
  instagram: 'https://instagram.com/sefehpisikler',
  mail: 'mailto:akremjafar@outlook.com',
  reddit: 'https://reddit.com/u/eraykim',
  repo: 'https://github.com/exrem/website',
  sozluk: 'https://github.com/sozluk-az',
  spotify: 'https://spti.fi/ekrem',
  twitter: 'https://twitter.com/erayreperit',
  youtube: 'https://www.youtube.com/@%D3%99%D0%BA%D1%80%D3%99%D0%BC'
}[linkAlias])

export default defineNuxtRouteMiddleware(({ query }) => {
  const goTo = query.to as string

  navigateTo(redirect(goTo) ?? '/', {
    external: true
  })
})
