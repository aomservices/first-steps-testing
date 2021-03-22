import { multiply } from '../functions'

describe('Multiply', () => {
    it('Correct multiplication', () => {
        const result = multiply(4, 5)
        expect(result).toEqual(20)
    })
    it('The numbers are positives', () => {
        const result = multiply(4, 3)
        expect(result).toEqual(12)
    })
    it('There is a negative number', () => {
        const result = multiply(2, -2)
        expect(result).toEqual('There is a negative number')
    })
    it('The numbers must be greater than 0', () => {
        const result = multiply(8, 0)
        expect(result).toEqual('The numbers must be greater than 0')
    })
})