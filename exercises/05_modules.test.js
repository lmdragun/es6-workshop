import * as Mathy from '../common/Mathy'
// WRITE YOUR IMPORT STATEMENTS HERE

test('can import Mathy', () => {
  // this one's already done! You're welcome :)
  expect(Mathy.sqrt).toBeDefined()
  expect(Mathy.square).toBeDefined()
  expect(Mathy.diag).toBeDefined()
})

test('can destructure the import, to only retain pieces of the import', () => {
  // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
  expect(mySqrt).toBeDefined()
  expect(mySquare).toBeDefined()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  // import `lodash`
  expect(_).toBeDefined()
})
