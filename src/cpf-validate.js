const { StringHelper } = require('./helpers/string.helper')

const CPF_LENGTH = 11;

const FIRST_VERIFIER_POSITION = 10;

const SECOND_VERIFIER_POSITION = 11;

const cpfValidation = function validate(cpf) {
    if (!cpf) return false;
    cpf = StringHelper.getOnlyDigits(cpf);
    if (!hasValidLength(cpf)) return false;
    if (StringHelper.hasAllSameCharacters(cpf)) return false;
    return verifyCPF(cpf);
}

const hasValidLength = (cpf) => {
    return cpf.length === CPF_LENGTH;
}

const verifyCPF = (cpf) => {
    const firstVerifier = calculateVerifierDigit(cpf, FIRST_VERIFIER_POSITION);
    const secondVerifier = calculateVerifierDigit(cpf, SECOND_VERIFIER_POSITION);
    return hasVerifierDigitValid(cpf, firstVerifier.concat(secondVerifier));
}

const calculateVerifierDigit = (cpf, position) => {
    const amount = calculateAmount(cpf, position);
    return calculateDigit(calculateRest(amount)).toString();
}

const calculateAmount = (cpf, position) => {
    let verifierAmount = 0;
    for (const digit of cpf) {
        if (position > 1) verifierAmount += digit * position--;
    }
    return verifierAmount
}

const calculateRest = (amount) => {
    return amount % CPF_LENGTH;
}

const calculateDigit = (rest) => {
    return (rest < 2) ? 0 : CPF_LENGTH - rest;
}

const hasVerifierDigitValid = (cpf, verifier) => {
    return getVerifierDigit(cpf) === verifier;
}

const getVerifierDigit = (cpf) => {
    return cpf.slice(-2)
}

module.exports = {
    cpfValidation
}