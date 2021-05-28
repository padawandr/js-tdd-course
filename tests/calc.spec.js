import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/calc'

describe('Calc', () => {

  // smoke tests
  describe('Smoke tests', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist
    })

    it('should exist the method `sub`', () => {
      expect(sub).to.exist
    })

    it('should exist the method `mult`', () => {
      expect(mult).to.exist
    })

    it('should exist the method `div`', () => {
      expect(div).to.exist
    })

  })

  // methods tests

  describe('Sum', () => {
    it('should return 5 when `sum(2,3)`', () => {
      expect(sum(2,3)).to.be.equal(5)
    })
  })

  describe('Sub', () => {
    it('should return -1 when `sub(2,3)`', () => {
      expect(sub(2,3)).to.be.equal(-1)
    })
  })

  describe('Mult', () => {
    it('should return 6 when `mult(2,3)`', () => {
      expect(mult(2,3)).to.be.equal(6)
    })
  })

  describe('Div', () => {
    it('should return 1.5 when `div(3,2)`', () => {
      expect(div(3,2)).to.be.equal(1.5)
    })
    it('should return "Cannot divide by zero" when divide by 0', () => {
      expect(div(3,0)).to.be.equal('Cannot divide by zero')
    })
  })

})
