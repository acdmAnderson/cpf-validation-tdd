const { cpfValidation } = require('../src/cpf-validate')
const { StringHelper } = require('../src/helpers/string.helper')

test('Should return false when CPF is null', () => {
    expect(cpfValidation(null)).toBe(false);
})

test('Should return false when CPF is undefined', () => {
    expect(cpfValidation(undefined)).toBe(false);
})

test('Should return false when CPF is NaN', () => {
    expect(cpfValidation(Number.NaN)).toBe(false);
})

test('Should return false when CPF is empty string', () => {
    expect(cpfValidation('')).toBe(false);
})

test('Should return false when CPF is Zero', () => {
    expect(cpfValidation(0)).toBe(false);
})

test('Should return false when CPF is false', () => {
    expect(cpfValidation(false)).toBe(false);
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
    const validCPF = '11144477735';
    expect(cpfValidation(validCPF)).toBe(true);
})

test('Should return true when CPF has valid special characters', () => {
    const validCPF = '493.290.230-10';
    expect(cpfValidation(validCPF)).toBe(true);
})

test('Should return false when CPF has only first digit valid', () => {
    const invalidCPF = '111.444.777-30';
    expect(cpfValidation(invalidCPF)).toBe(false);
})

test('Should return false when CPF has only second digit valid', () => {
    const invalidCPF = '111.444.777-05';
    expect(cpfValidation(invalidCPF)).toBe(false);
})

test('Should return false when CPF has only special characters', () => {
    const invalidCPF = '!@#$%ˆ&*()*__';
    expect(cpfValidation(invalidCPF)).toBe(false);
})

test('Should call StringHelper.getOnlyDigits with correct params', () => {
    const validCPF = '493.290.230-10';
    const getOnlyDigitsSpy = jest.spyOn(StringHelper, 'getOnlyDigits')
    cpfValidation(validCPF)
    expect(getOnlyDigitsSpy).toHaveBeenCalledWith(validCPF)
})

test('Should call StringHelper.hasAllSameCharacters with correct params', () => {
    const validCPF = '49329023010';
    const hasAllSameCharactersSpy = jest.spyOn(StringHelper, 'hasAllSameCharacters')
    cpfValidation(validCPF)
    expect(hasAllSameCharactersSpy).toHaveBeenCalledWith(validCPF)
})