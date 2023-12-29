/**
 * An array is a container object that holds a fixed number
 * of values of a single type.
 * Array Object lets you store multiple values in a single variable.
 * Syntax for creating an Array Object 👇
 */


/**
 * Making use of some methods of th Array Object.
 * -- concat()  -- map()
 * -- forEach() -- filter()
 * -- find()    -- reduce()
 */
var fruits = new Array("apple", "orange", "grape");
console.log(fruits)

var arr1 = new Array("strawberry", "melon")
console.log("------------------------------------------")
var concat_arr = fruits.concat(arr1);
console.log("concat(): ", concat_arr)
console.log("------------------------------------------")
const a = [1, 2, 3, 4, 5]
a.forEach((number, index) => {
    console.log("forEach() : ", index, number)
})
console.log("------------------------------------------")
const for_map = a.map((num) => {
    return num * 2
})
console.log("map(): ", for_map)
console.log("------------------------------------------")
const for_filter = a.filter((num) => {
    return num > 2
})
console.log("filter() : ", for_filter)
console.log("------------------------------------------")
const for_find = a.find((num) => {
    return num > 2
})
console.log("find() : ", for_find)
console.log("------------------------------------------")
/**
 * The reduce() method reduces an array to a single value.
 * It iterates over each element of the array, applying a specified
 * callback function That is provided.
 * The callback function takes two parameters: an accumulator and
 * the current element iteration being processed. The result of each iteration 
 * is then used as the accumulator for the next iteration.
 * 
 */
const numbers = [10, 20, 30, 40, 50];

const for_reduce = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 5);

console.log(for_reduce);
prompt("Enter: ")