const { cpfValidation } = require('../src/cpf-validate')

test('Should return false when CPF is null', () => {
    expect(cpfValidation(null)).toBe(false);
})

test('Should return false when CPF is undefined', () => {
    expect(cpfValidation(undefined)).toBe(false);
})

test('Should return false when CPF has less than 11 characters', () => {
    const invalidCPF = '00000';
    expect(cpfValidation(invalidCPF)).toBe(false);
})

test('Should return false when CPF has more than 14 characters', () => {
    const invalidCPF = '000000000000000';
    expect(cpfValidation(invalidCPF)).toBe(false);
})

test('Should return false when CPF has all same characters', () => {
    const invalidCPF = '00000000000';
    expect(cpfValidation(invalidCPF)).toBe(false);
})

test('Should return true when CPF is valid', () => {
    const invalidCPF = '11144477735';
    expect(cpfValidation(invalidCPF)).toBe(true);
})

test('Should return true when CPF has valid special characters', () => {
    const invalidCPF = '111.444.777-35';
    expect(cpfValidation(invalidCPF)).toBe(true);
})
