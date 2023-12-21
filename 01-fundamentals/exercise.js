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


