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