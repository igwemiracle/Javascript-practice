/** -------- Exercis 1
 * Create a new function and give it a name = "takeFunction" that takes 
 * two parameters. 
 * 1. name
 * 2. callback that prints out what we pass to it (printVariable)
 *    Take name and append "Hello" to the beginning of the name
 *  ForExample: 
 *      If i pass in Kyle it will print out "Hello Kyle"
 * 
 */
function printVariable(variable) {
    console.log(variable);
}

function takeFunction(callBack, name) {
    callBack("Hello" + name);
}
takeFunction(printVariable, " Micool");

/**
 *      Exercise 2
 * Create an array with the first 5 letters of the alphabet
 * and then print out the middle element in the array (c) 
 */

const alb = ["a", "b", "c", "d", "e"]
const middle_alb = alb[2]
console.log(alb);
console.log(middle_alb);

// Given :
const a = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]

//Print out 4, 8, 11

console.log(a[0][3])
console.log(a[1][2])
console.log(a[2][0])