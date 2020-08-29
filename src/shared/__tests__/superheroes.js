import {getFlyingHeros} from '../superheroes'

test('return super heroes that fly', () => {
  const flyingHeroes = getFlyingHeros()
  expect(flyingHeroes).toMatchSnapshot()
})
