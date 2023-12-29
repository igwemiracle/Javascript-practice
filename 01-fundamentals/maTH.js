/**
 * The Math Object provides you properties and methods for
 * mathematical constants and functions. Unlike other global
 * objects, Math is not a constructor. All the properties and
 * methods of Math are static and can be called by using Math 
 * as an object without creating it.
 *     ----- SYNTAX -----
 * var pi_val = Math.PI
 * var sine_val = Math.sin(30);
 */

const num1 = 2;
const num2 = 10;

let pi_val = Math.PI
console.log("Value of PI ", pi_val);
let sine_val = Math.sin(30);
console.log("Value of sine(30); ", sine_val);
let LN2_val = Math.LN2
console.log("Value of LN2 = ", LN2_val);
let abs_val = Math.abs("string");
console.log("abs val of a string = ", abs_val);
let abs_val2 = Math.abs(null);
console.log("abs val of null = ", abs_val2);
let abs_val3 = Math.abs(-12);
console.log("abs val of -12 = ", abs_val3);
let sqrt_1_2 = Math.SQRT1_2
console.log("Square root of 1/2 = ", sqrt_1_2);
let val_pow = Math.pow(num2, num1);
console.log(`${num2} raise to the power of ${num1} = `, val_pow);
let sqrt = Math.sqrt(val_pow);
console.log(`The sqaure root of ${val_pow} is = ` + sqrt);

