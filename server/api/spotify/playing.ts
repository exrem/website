export default defineEventHandler(async event => {
  const config = useRuntimeConfig()

  if (!config.client_id) return { data: null }

  const Basic = `Basic ${(Buffer.from(`${config.client_id}:${config.client_secret}`).toString('base64'))}`,
    { access_token } = await (await fetch('https://accounts.spotify.com/api/token', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': Basic
      },
      body: `grant_type=refresh_token&refresh_token=${config.refresh_token}`
    })).json(),
    { item } = await (await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    })).json()

  return item
})