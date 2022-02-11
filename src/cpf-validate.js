const hasValidLength = (cpf) => {
    return cpf.length >= 11 || cpf.length <= 14;
}

const hasOnlyEqualsCharacters = (cpf) => {
    return cpf.split('').every(char => char === cpf.charAt(0));
}

const calculateRest = (amount) => {
    return amount % 11;
}

const calculateVerifier = (rest) => {
    return (rest < 2) ? 0 : 11 - rest;
}

const calculateAmount = (cpf, position) => {
    let verifierAmount = 0;
    for (let index = 1; index < cpf.length - 1; index++) {
        const digit = +cpf.charAt(index - 1);
        verifierAmount = verifierAmount + (position - index) * digit;
    };
    return verifierAmount
}

const calculateFirstVerifier = (cpf) => {
    const firstVerifierAmount = calculateAmount(cpf, 11);
    return calculateVerifier(calculateRest(firstVerifierAmount)).toString();
}

const calculateSecondVerifier = (cpf, firstVerifier) => {
    let secondVerifierAmount = calculateAmount(cpf, 12);
    secondVerifierAmount += 2 * firstVerifier;
    return calculateVerifier(calculateRest(secondVerifierAmount)).toString();
}

const getVerifierDigit = (cpf) => {
    return cpf.substring(cpf.length - 2, cpf.length)
}

const hasVerifierDigitValid = (cpf, verifier) => {
    return getVerifierDigit(cpf) === verifier;
}

const cpfValidation = function validate(cpf) {
    if (!cpf) return false;
    if (!hasValidLength(cpf)) return false;
    cpf = cpf
        .replace('.', '')
        .replace('.', '')
        .replace('-', '')
        .replace(" ", "");
    if (hasOnlyEqualsCharacters(cpf)) return false;
    try {
        const firstVerifier = calculateFirstVerifier(cpf)
        const secondVerifier = calculateSecondVerifier(cpf, firstVerifier)
        return hasVerifierDigitValid(cpf, firstVerifier.concat(secondVerifier))
    } catch (e) {
        console.error("Erro !" + e);
        return false;
    }
}

module.exports = {
    cpfValidation
}