const expect = require('chai').expect
const calc = require('../src/calc')

describe('Calc', () => {

  // smoke tests
  describe('Smoke tests', () => {

    it('should exist the calc lib', () => {
      expect(calc).to.exist
    })

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist
    })

    it('should exist the method `sub`', () => {
      expect(calc.sub).to.exist
    })

    it('should exist the method `mult`', () => {
      expect(calc.mult).to.exist
    })

    it('should exist the method `div`', () => {
      expect(calc.div).to.exist
    })

  })

})
