//Type Conversion & Coercion
//Truthy and Falsy values


var answer = 0
var info = "The sum is "
var info2 = "The square root is "
var forBool = 0;
var forSwitch = 0;
var arr = ["jon", "pete", "james", "vin"]

let myVar = "Global";


var newVal = arr.push("isaac")
var frontVal = arr.unshift("fave")
console.log(arr);

function addTwoNumbers(a, b) {
    return a + b;
}

function forBooleanSake(num) {
    if (num == 9) {
        return "You chose correctly!"
    } else {
        return "Hey! Boozo that's the wrong number!!"
    };
}



function addTest(a, b) {
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}



// -------CHECK FOR VARIABLE SCOOPE-------
function checkScoope() {
    let myVar = "Local";
    console.log(myVar);
}
checkScoope()
//-------------------------------------
var add = addTest(4, 1);
console.log(info2 + add);

//-------------------------------------
forBool = forBooleanSake(9);
console.log(forBool);
//-------------------------------------
answer = addTwoNumbers(5, 9);
console.log(info + answer);
//-------------------------------------

const favNumber = prompt("What's your favourite number?")
console.log(favNumber)
console.log(typeof favNumber)
if (favNumber === 23) {
    console.log("Cool! you are 23")
}