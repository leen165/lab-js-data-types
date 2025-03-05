// Iteration 1 | Tongue Twister
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
console.log(tongueTwister); // Output: "Fred fed Ted bread and Ted fed Fred bread"

// Iteration 2 | Camel Tail
const part1 = "java";
const part2 = "script";

const cameLtaiL = part1.slice(0, -1) + part1.slice(-1).toUpperCase() +
                  part2.slice(0, -1) + part2.slice(-1).toUpperCase();

console.log(cameLtaiL); // Output: "javAscripT"

// Iteration 3 | Calculate Tip
const billTotal = 84;
const tipAmount = billTotal * 0.15;

console.log(tipAmount); // Output: 12.6

// Iteration 4 | Generate Random Number
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber); // Output: Random number between 1 and 10

// Iteration 5 | Booleans and Logical Operators
const a = true;
const b = false;

// Predict outputs before running:
const expression1 = a && b; // false
const expression2 = a || b; // true
const expression3 = !a && b; // false
const expression4 = !(a && b); // true
const expression5 = !a || !b; // true
const expression6 = !(a || b); // false
const expression7 = a && a; // true

console.log(expression1); // false
console.log(expression2); // true
console.log(expression3); // false
console.log(expression4); // true
console.log(expression5); // true
console.log(expression6); // false
console.log(expression7); // true
