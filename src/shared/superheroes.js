const superheroes = [
  {
    name: 'Batman',
    powers: ['rant', 'fly'],
  },
  {
    name: 'Superman',
    powers: ['rant'],
  },
]

export const getFlyingHeros = () => {
  return superheroes.filter(hero => hero.powers.includes('fly'))
}
