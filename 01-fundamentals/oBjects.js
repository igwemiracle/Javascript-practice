/**
 * Object Oriented Programming (OOP)
 *   A programming language can be called object-oriented if it
 *   provides four basic capabillities to developers.
 * 1. Encapsulation: The capability to store related information, whether data
 *      or methods, together in object.
 * 2. Aggregation: The capability to store one object inside another object.
 * 3. Inheritance: The capability of a class to rely upon another class (or
 *      number of classes) for some of it properties and methods.
 * 4. Polymorphism: The capability to write one function or method that works
 *      in a variety of different ways.
 * | Syntax for adding a property to an object |
 * --------------------------------------------
 *    objectName.objectProperty = propertyValue;
 * Note:: The "new" operator is used to create an instance of an object.
 *        Followed by the constructor method.
 */

// EXAMPLE 1
var book = new Object();
book.subject = "Perl";
book.author = "Miracle";




/**
 *  EXAMPLE 2
 * Demostrate how to create an object with a User-defined function.
 * Here the "this" keyword is used to refer to object that has been
 * passed to a function. 
 */
// Define a function that will work as a method
function addPrice(amoutn) {
    this.price = amoutn;
}

function car(color, model) {
    this.color = color;
    this.model = model;
    this.carPrice = addPrice;
}
var myCar = new car("Red", "Toyota")
myCar.carPrice(6 + " millon dollars")


/**
 * NUMBER OBJECT
 *  Properties of Number
 * -- MAX_VALUE   -- NEGATIVE_INFINITY
 * -- MIN_VALUE   -- POSITIVE_INFINITY
 * -- NaN         -- prototype
 * -- constructor
 */


function show_max_value() {
    var max_val = Number.MAX_VALUE;

    alert("Value of Number.MAX_VALUE : " + max_val);
}


function show_min_value() {
    var min_val = Number.MIN_VALUE;

    alert("Value of Number.MIN_VALUE : " + min_val);
}

function show_NaN_value() {
    var dayOfMonth = prompt("Please enter a number ")

    if (dayOfMonth < 1 || dayOfMonth > 31) {
        dayOfMonth = Number.NaN;
        alert("Day of the month must be between 1 and 31")
    }

    document.write("Value of day Of Month " + dayOfMonth);

}

function show_prototype(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
