const favAnimal = "shark"

switch (favAnimal) {
    case "dog":
        console.log("This is a Dog")
        break;
    case "pig":
        console.log("This is a pig")
        break;
    case "fish":
        console.log("This is a fish")
        break;
    default:
        console.log("That's cool but i do not know the animal")
}
console.log("=============================================")
console.log("For Loop : Prints Hi a specified number of times (5)")
for (i = 0; i < 5; i++) {
    console.log("Hi")
}

console.log("=============================================")
// A key advantage of using a "while" loop in this scenario is that
// it allows for flexible iteration based on a condition.It is particularly
// useful when you don't know in advance how many iterations will be required,
// and the loop continues until a specific condition is met.

// Let's say for example :
let Person = {
    name: "james",
    friend: {
        name: "mike",
        friend: {
            name: "pete"
        }
    }
}
// We used the while to check if the currentPerson has a friend or not 
// and print out only the person that has a friend.

let currentPerson = Person
while (currentPerson.friend != null) { //while the current person has a friend.
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
}
console.log("=============================================")
// Recursion : 
//  The ability of a function to call itself.
// For example: Create a recursive function that prints number from 1 - 10




function sumNumbersRecursive(num) {
    if (num <= 0) return 0
    return num + sumNumbersRecursive(num - 1);
}

console.log(sumNumbersRecursive(10));


//Print names of people with friends from the "Person" object above.
function PrintNamesWithFriends(currentPerson) {
    if (currentPerson.friend == null) return;
    console.log(currentPerson.name);
    PrintNamesWithFriends(currentPerson.friend);
}

PrintNamesWithFriends(Person);