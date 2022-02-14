module.exports = {
    roots: ['<rootDir>/test'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.js'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    watchPathIgnorePatterns: ['globalConfig']
}