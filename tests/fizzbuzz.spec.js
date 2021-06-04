import { expect } from 'chai'
import { fizzbuzz } from '../src/fizzbuzz'

describe('Fizzbuzz', () => {

  // smoke test
  it('should exist the method `fizzbuzz`', () => {
    expect(fizzbuzz).to.exist
  })

  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz')
    expect(fizzbuzz(27)).to.be.equal('Fizz')
  })

  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzbuzz(5)).to.be.equal('Buzz')
    expect(fizzbuzz(40)).to.be.equal('Buzz')
  })

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz')
    expect(fizzbuzz(30)).to.be.equal('FizzBuzz')
  })

  it('should return the number when non-multiple', () => {
    expect(fizzbuzz(7)).to.be.equal(7)
    expect(fizzbuzz(11)).to.be.equal(11)
  })

  it('should return 0 when 0', () => {
    expect(fizzbuzz(0)).to.be.equal(0)
  })

})
