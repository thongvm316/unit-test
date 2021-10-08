const woof = require('./woof')

test('should return number of woofs', () => {
  const result = woof('oh herro')
  expect(result).toBe('8woof')
  // expect(result).not.toBe('bark')

  //expect({ a: 'a', b: 'b' }).toEqual({ a: 'a', b: 'b' }) // toEqual use for obj - arr || if use toBe here, show err although result is right

  expect(result).toMatch(/\8woof/i) // use for regulaexpression
  expect(['a', 'c', 'd']).toContain('a')
})
