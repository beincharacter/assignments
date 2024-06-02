/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000);
    });
}

module.exports = wait;


// test it either using 
//        npm run 1-promisify-setTimeout
//        npx jest ./tests/1-promisify-setTimeout.test.js 