const now = new Date(),
  birthDate = new Date('2008-10-14'),
  diff = now.getFullYear() - birthDate.getFullYear()

export default now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate()) ? diff - 1 : diff