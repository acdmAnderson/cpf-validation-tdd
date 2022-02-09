module.exports = {
    roots: ['<rootDir>/test'],
    collectCoverageFrom: [
      '<rootDir>/test/**/*.js'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    watchPathIgnorePatterns: ['globalConfig']
}