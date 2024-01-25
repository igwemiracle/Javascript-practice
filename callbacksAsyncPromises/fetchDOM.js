// The "fetch" method helps to query information that is on the web.
// This is done through the form of an API.
const URL = "https://jsonplaceholder.typicode.com/users/10"
const URL_FOR_POST = "https://jsonplaceholder.typicode.com/posts"
// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         //Exercise: Log the name of each users
//         console.log(data.map(user => user.name)) //This gives us an array of all users.
//         for (let i = 0; i < data.length; i++) {
//             // This gives us all the names of the users.
//             const element = data[i]
//             console.log(element.name)
//         }
//     })

//Exercise:--> Try to convert the code above to an Async await function
// and make sure they work exactly.
// --> Use the try... catch.. block to catch errors if a user does not exist.

async function FetchMethod() {
    try {
        const response = await fetch(URL)
        if (response.ok) {
            const users = await response.json()
            console.log(users)
        } else {
            console.log("User with that ID does not exist")
        }

    } catch (err) {
        console.error("Error!!")
    }

}
FetchMethod()

//Exercise 2: Create a function that adds a new user to the previous users.
async function addUser() {
    const response = await fetch(URL_FOR_POST, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Name: "Micool bobo",
            Age: 21,
            Nationality: "Nigerian",
            Sex: "male"
        })
    })
    const post = await response.json()
    console.log(post)
}
addUser()

//Exercise 3: Go to the jsonplaceholder url and get all the comments with the postId 1.
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments?postId=1"
fetch(URL_COMMENTS)
    .then(response => {
        return response.json()
    })
    .then(comments => {
        console.log(comments)
    })
