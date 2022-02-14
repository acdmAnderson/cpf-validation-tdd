const hasAllSameCharacters = (stringValue) => {
    return stringValue.split('').every(char => char === stringValue.charAt(0));
}

const getOnlyDigits = (stringValue) => {
    return stringValue.replace(/\D/g, '');
}

const StringHelper = {
    hasAllSameCharacters,
    getOnlyDigits
}

module.exports = {
    StringHelper
}