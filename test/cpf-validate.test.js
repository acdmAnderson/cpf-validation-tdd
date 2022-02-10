const { cpfValidation } = require('../src/cpf-validate')

test('Should return false when CPF is null', () => {
    expect(cpfValidation(null)).toBe(false);
})

test('Should return false when CPF is undefined', () => {
    expect(cpfValidation(undefined)).toBe(false);
})
