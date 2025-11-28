// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

(function chai(){
    console.log("DB CONNECTED");
})();

const chaiArw = (() => {
    console.log("DB CONNECTED AGAIN!");
})();