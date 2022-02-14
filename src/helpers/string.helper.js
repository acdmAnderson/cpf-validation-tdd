const EMPTY = '';

const hasAllSameCharacters = (stringValue) => {
    return stringValue.split(EMPTY).every(char => char === stringValue.charAt(0));
}
const getOnlyDigits = (stringValue) => {
    return stringValue.replace(/\D/g, EMPTY);
}

const StringHelper = {
    hasAllSameCharacters,
    getOnlyDigits,
    EMPTY
}

module.exports = {
    StringHelper
}