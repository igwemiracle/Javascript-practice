function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`You waited ${delay} milliseconds!`)
            // reject('Error!!')
        }, delay)
    })
}


// setTimeoutPromise(250).then((message) => {
//     console.log(message)
//     return setTimeoutPromise(250)
// }).then((mssg) => {
//     console.log(mssg)
// }).catch((message) => {
//     console.log(message)
// })
// =====> This is can be done using the Async await👇.
// With the help of the try... catch... block we can catch
// errors incase our promise is rejected.

async function asyncSetTimeoutPromise() {
    try {
        console.log("Before error")
        const message = await setTimeoutPromise(2500);
        console.log(message)
        const message2 = await setTimeoutPromise(2500);
        console.log(message2)
    } catch (errors) {
        console.log("Here")
        console.error(errors)
    }
}
asyncSetTimeoutPromise()