// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


let c = 0;

const interval = setInterval(() => {
    c++;
    console.log({c});
}, 1000);


// output
//
// { c: 1 }
// { c: 2 }
// { c: 3 }
// { c: 4 }
// { c: 5 }
// { c: 6 }
// { c: 7 }
// { c: 8 }
// { c: 9 }