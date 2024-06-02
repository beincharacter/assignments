// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let c = 0;

function incrementCounter() {
    c++;
    console.log({c});
    setTimeout(incrementCounter, 1000);
}

incrementCounter();



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





































































// (Hint: setTimeout)