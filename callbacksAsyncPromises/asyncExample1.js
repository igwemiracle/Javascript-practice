function getValueWithDelay(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I promise i will be done with the ${value} in ${delay} milliseconds`)
        }, delay)
    })
}
function getValueWithDelayError(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`You didn't keep to your promise 😞`)
        }, delay)
    })
}

// Using and Async and await, call getValueWithDelay twice and print out
// the returned value Then call getValueWithDelayError and make sure the
// error is properly caught.

async function getTheValues(value) {
    try {
        const value1 = await getValueWithDelay(value, 250)
        console.log(value1)
        const value2 = await getValueWithDelay(value = "pens", 250)
        console.log(value2)
        const value3 = await getValueWithDelayError(value, 250)
        console.log(value3)
    } catch (err) {
        console.error(err)
    }
}


getTheValues("books")