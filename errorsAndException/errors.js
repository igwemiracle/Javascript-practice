/**
 * There are three(3) types of errors in programming:
 * (a) syntax error
 * (b) runtime error
 * (c) logic error
 */

// Syntax error also callled the parsing error happens at
// Interpret time in Javascript.

// While the runtime error happens during execution of the program after
// interpret time.

// Using the "try", "catch", "finally" as well as the "throw" keyword
// to handle exceptions.

function subtractNumbers(a, b) {
    try {
        if (a >= b) {
            throw (`subtracts ${b} from ${a}`)
        } else {
            throw (`${b} subtracts ${a} with a negative sign`)
        }
    } catch (e) {
        console.log("Error: ", e)
    } finally {
        console.log("Finally block will always execute!")
    }
}

subtractNumbers(20, 40)