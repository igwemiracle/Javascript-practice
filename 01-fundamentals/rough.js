// let count = 0;
// console.log("Starting loop: ");

// while (count <= 10) {
//     console.log("Current Count : " + count);
//     count++;
// }

// console.log("Loop stoped!!!")

// let x = 1;

// while (x < 10) {
//     x += 1
//     if (x == 5) {
//         continue;
//     }
//     console.log(x);

// }
// console.log("Exiting the Loop!!")

// -------- CODE CHALLENGE ---------
// BMI = mass / height ** 2 = mass / (height * height)

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

console.log("Mark's Mass and Height are: ", markMass, markHeight);
console.log("John's Mass and Height are: ", johnMass, johnHeight);


const bmi_of_mark = 78 / (1.69 * 1.69);
const bmi_of_john = 92 / (1.95 * 1.95);

console.log("Mark's BMI is = ", bmi_of_mark);
console.log("John's BMI is = ", bmi_of_john);

let markHigherBmi = true;

if (bmi_of_mark < bmi_of_john) {
    console.log(markHigherBmi);
}
else {
    console.log(false);
}

const firstName = "Miracle";
const age = 20;
const job = "Software Engineer";

const bio = `Hi, I'm ${firstName},\n\
a ${age} year old ${job}!`;
console.log(bio);


let x = 1;
let y = 34;
while (x < 10) {
    x += 1
    if (x == 5) {
        console.log(`The value of x is ${x}`)
        console.log(`When i multiply the value of x \n\
being ${x} by ${y} the new value of x becomes ${x * y}`)
        continue;
    }
    console.log(x)
}
console.log("Exiting the looping!")


//Convert String to Integer or Number
const num = "1"
console.log(typeof parseInt(num))






