const { cpfValidation } = require('../src/cpf-validate')
test('Should return false when CPF is falsy', () => {
    expect(cpfValidation(null)).toBeFalsy();
})