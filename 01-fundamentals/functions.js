//Creating a function using the "function" keyword
// function gradeStudents(val) {
//     var grade = val
//     switch (grade) {
//         case 'A':
//             return "Good grade"
//         case "B":
//             return "Pass"
//     }
// }
// console.log(gradeStudents("B"))

function sayHello() {
    return "Hello world!!"
};

function useOfSwitchKeyWord(val) {
    switch (val) {
        case 1:
            return "This is a Goat";

        case 2:
            return "This is a Sheep";

        case 3:
            return "This is a Cattle";

        case 4:
            return "This is a Dog";

        default:
            return "Just pick any animal!!";

    }
}


function concatenate(first, last) {
    let full;
    full = first + last;
    return full;
}

function printName(firstName, lastName) {
    let fullName;
    fullName = concatenate(firstName, lastName);
    return fullName
}


//Another way of creating a function👇
// Using Function constructor(Anonymous function)
let multiplyNumber = new Function("x", "y", "return x*y;")

function secondFunc(a, b) {
    let result;

    result = multiplyNumber(a, b);
    return result;
}
/*
Function literals is another way of defining a function
This is an expression that defines an unnamed function
*/

var creatFunc = function (x, y) { return x * y };

function thirdFunc(x, y) {
    var z;
    z = creatFunc(x, y);
    return z
}

//NESTED FUNCTION
function nestedFunction(a, b) {
    function square(x) {
        console.log("The square of x = ", x * x)
        return x * x;

    }
    // console.log("The square root of a is = ", Math.sqrt(square(a)));
    // console.log("The square root of b is = ", Math.sqrt(square(b)));
    return Math.sqrt(square(a) + square(b));

}

function fourthFunction(a, b) {
    var result;
    result = nestedFunction(a, b);
    return result
}

//------Function Literal-------
const add = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter
    }
})();

// Passing function as an argument
function addTest(a, b) {
    return a + b;
}

function collectFunc(operation, a, b) {
    const result = operation(a, b);
    console.log(`Result: ${result}`);
    console.log(`The two numbers used are ${a} and ${b}`);
}

collectFunc(addTest, 5, 3);

/**
 *   Arrow Function
 * This function is created without the "function" keyword.
 * This is done by using the `let` keyword for initializing a variable
 * and then assigning it to the parameters in parenthesis followed by
 * the arrow symbol `=>`, the
 * expression for the parameters is provided.
 */

let sumArrow = (a, b) => {
    return a + b
}
console.log("The ARROW-FUNCTION gives the sum = ", sumArrow(3, 6));


// Call add() 3 times
console.log(add());
console.log(add());
console.log(add());

// The counter should now be 3

nested = fourthFunction(5, 7)
console.log(nested);

//----------------------------------
third = thirdFunc(10, 20)
console.log("The value of the third is = " + third);

//----------------------------------
answer2 = secondFunc(12, 3);
console.log(answer2);
//----------------------------------

answer = printName("Miracle ", "Igwe")
console.log(answer);
//----------------------------------
ans = (sayHello());
console.log(ans)
//-------------------------------------

forSwitch = useOfSwitchKeyWord(2)
console.log(forSwitch)
