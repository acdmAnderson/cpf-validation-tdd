const EMPTY = '';

const hasAllSameCharacters = (stringValue) => {
    const [firstChar] = stringValue;
    return [...stringValue].every(char => char === firstChar);
}
const getOnlyDigits = (stringValue) => {
    return stringValue.replace(/[.-]/g, EMPTY);
}

const StringHelper = {
    hasAllSameCharacters,
    getOnlyDigits,
    EMPTY
}

module.exports = {
    StringHelper
}