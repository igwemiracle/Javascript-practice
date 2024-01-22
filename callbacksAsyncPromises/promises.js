/**
 * Promises in JavaScript provide a way to handle asynchronous operations more effectively and
 *  avoid callback hell.A promise is an object representing the eventual completion or failure of an
 *  asynchronous operation.It is in one of three states:
 * Pending: The initial state; the promise is neither fulfilled nor rejected.
 * Fulfilled: The operation completed successfully, and the promise has a resulting value.
 * Rejected: The operation failed, and the promise has a reason for the failure.
 */

// Syntax
let myPromise = new Promise((resolve, reject) => {
    let a = 1 + 1

    if (a == 25) {
        resolve("Success!")
    } else {
        reject("Failed")
    }
})

myPromise.then((message) => {
    console.log("This is in the then: " + message)
}).catch((message) => {
    console.log("This is in the catch: " + message)
})

// =================================================================
// Promises are replacement for the callback function, which makes it more easy
// to use. So therefore the below callbacks will be converted to Promises

const userLeft = false
const userWatchingCatMeme = true

// ========== Callbacks ============
// function watchingTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: "User Left",
//             message: ":("
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: "User watching cat meme",
//             message: " CallbacksFunction < cat"
//         })
//     } else {
//         callback({
//             names: "Success",
//             message: "Thumbs Up 👍, Like and subscribe!"
//         })
//     }
// }

// watchingTutorialCallback((message) => {
//     console.log(message)
// }, (message) => {
//     console.log(message)
// })

// ============ Promise ============
function watchingTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User Left",
                message: ":("
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: "User watching cat meme",
                message: " Learning How to Use Promise < cat"
            })
        } else {
            resolve({
                names: "Success",
                message: "Thumbs Up 👍, Like and subscribe!"
            })
        }

    })

}

watchingTutorialPromise().then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})
