/**
 * A callback function is a function that is passed as an argument to another 
 * function and is executed after the completion of an asynchronous operation or at a later time.
 * Callbacks are a fundamental concept in JavaScript and are commonly used in event handling,
 * asynchronous programming, and other scenarios where functions need to be executed in response
 * to certain events or conditions.
 * The function that receives the callback as an argument is known as a higher - order function.
 */


// ======= Example 1:
const names = ["James", "Griffin", "Chris", "Stewie"]
//-- Let's say we want to loop through each element and print.
//-- We can do this using array "forEach" method👇.
//names.forEach((name) => {
//     console.log(name)
// })

//We can also do the same thing with the help of a callback function.
const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        cb(element)
    }
}

myForEach(names, (name) => {
    console.log(name)
})


//======= An Asynchronous Example
const loadPokemon = (id, cb) => {
    //Make a request to pokemone API
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json()) //(.then) handles the response and convert to json
        .then(data => {
            cb(data)
        })
}
//Another callback function to display a particular pokemon info.
const displayPokemonInfo = (pokemonData) => {
    console.log(`Name: ${pokemonData.name}`);
    console.log(`Height: ${pokemonData.height}`);
    console.log(`Weight: ${pokemonData.weight}`);
};


// Using loadPokemon with the displayPokemonInfo callback
loadPokemon(12, displayPokemonInfo);

