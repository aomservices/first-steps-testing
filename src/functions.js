export function multiply(num1, num2) {
    let result
    if (num1 > 0 && num2 > 0) {
        result = num1 * num2
    } else if (num1 === 0 || num2 === 0) {
        result = "The numbers must be greater than 0"
    } else {
        result = "There is a negative number"
    }
    return result
}
