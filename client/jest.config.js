<<<<<<< HEAD
module.exports = {
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    }
=======
module.exports = {
preset: 'ts-jest',
transform: {
'^.+\\.(ts|tsx)?$': 'ts-jest',
"^.+\\.(js|jsx)$": "babel-jest",
}
>>>>>>> 4d8f954917cc71f21658ee5a794d74f94682d2fd
};