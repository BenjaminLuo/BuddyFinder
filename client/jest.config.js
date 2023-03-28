module.exports = {
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    "moduleNameMapper": {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "^firebase-admin/app$":
            "<rootDir>/node_modules/firebase-admin/lib/app/index.js",
        "^firebase-admin/auth$":
            "<rootDir>/node_modules/firebase-admin/lib/auth/index.js",
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
    },
    setupFilesAfterEnv: ['./setupTest.js'],
    testEnvironment: 'jest-environment-jsdom'
};