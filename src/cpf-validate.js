const CPF_LENGTH = 11;

const MAX_CPF_LENGTH = 14;

const MIN_VERIFIED_DIGIT_VALUE = 0;

const SECOND_VERIFIER_POSITION = 12;

const cpfValidation = function validate(cpf) {
    if (!cpf) return false;
    if (!hasValidLength(cpf)) return false;
    cpf = getOnlyDigits(cpf)
    if (hasAllSameCharacters(cpf)) return false;
    return verifyCPF(cpf)
}

const hasValidLength = (cpf) => {
    return cpf.length >= CPF_LENGTH || cpf.length <= MAX_CPF_LENGTH;
}

const getOnlyDigits = (cpf) => {
    return cpf.replace(/\D/g, '');
}

const hasAllSameCharacters = (cpf) => {
    return cpf.split('').every(char => char === cpf.charAt(0));
}

const verifyCPF = (cpf) => {
    try {
        const firstVerifier = calculateFirstVerifier(cpf)
        const secondVerifier = calculateSecondVerifier(cpf, firstVerifier)
        return hasVerifierDigitValid(cpf, firstVerifier.concat(secondVerifier))
    } catch (e) {
        console.error('Fail to validate CPF. Error: %s', e);
        return false;
    }
}

const calculateFirstVerifier = (cpf) => {
    const firstVerifierAmount = calculateAmount(cpf, CPF_LENGTH);
    return calculateVerifier(calculateRest(firstVerifierAmount)).toString();
}

const calculateSecondVerifier = (cpf, firstVerifier) => {
    let secondVerifierAmount = calculateAmount(cpf, SECOND_VERIFIER_POSITION);
    secondVerifierAmount += 2 * firstVerifier;
    return calculateVerifier(calculateRest(secondVerifierAmount)).toString();
}

const calculateAmount = (cpf, position) => {
    let verifierAmount = 0;
    for (let index = 1; index < cpf.length - 1; index++) {
        const digit = cpf.charAt(index - 1);
        verifierAmount = verifierAmount + (position - index) * digit;
    };
    return verifierAmount
}

const calculateRest = (amount) => {
    return amount % CPF_LENGTH;
}

const calculateVerifier = (rest) => {
    return (rest < 2) ? MIN_VERIFIED_DIGIT_VALUE : CPF_LENGTH - rest;
}

const hasVerifierDigitValid = (cpf, verifier) => {
    return getVerifierDigit(cpf) === verifier;
}

const getVerifierDigit = (cpf) => {
    return cpf.substring(cpf.length - 2, cpf.length)
}

module.exports = {
    cpfValidation
}