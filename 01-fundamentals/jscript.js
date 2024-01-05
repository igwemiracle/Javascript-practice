// Testing the Power of the document object and how it is used
// to get elements from our html file.
// ----- class element ----- 
const div_class = document.getElementsByClassName('div-class')
const convert_class_to_array = Array.from(div_class);
convert_class_to_array.forEach(div => (div.style.color = "red"));

// ----- Id element ----- 
const div_Id = document.getElementById('div-id')
div_Id.style.color = "green"

//------- Using querySelector method --------
const dataAttributeElement = document.querySelector("[data-test]")
console.log(dataAttributeElement)

const paragraphWithClasses = document.querySelectorAll('.para-class')
paragraphWithClasses.forEach(paragraph => (paragraph.style.color = "pink"));
console.log(paragraphWithClasses)

const paragraphWithId = document.querySelector('#para-id')
console.log(paragraphWithId)

// Add an anchor tag to the HTML and when it is clicked,
// prevent the default and log something to the console

const linkAttribute = document.querySelector('[href="https://github.com/igwemiracle"]')
console.log(linkAttribute)

linkAttribute.addEventListener('click', event => {
    event.preventDefault()
    console.log("The event has been prevented successfully!!!")
})

// More on the Use of Data Attributes
const form = document.querySelector('[data-form]')
form.addEventListener('submit', event => {
    event.preventDefault()
    console.log("Form Submitted!!")
})

/**
 * Create a Counter Application that counts how man times
 * a button is clicked
 * 
 */

const buttons = document.querySelectorAll('button') // 3['btn1', 'btn2', 'btn3']

for (let i = 0; 3 < buttons.length; i++) {
    buttons[2].addEventListener('click', () => {
        currentClick = parseInt(buttons[2].dataset.clicks) //0,1,2
        buttons[2].dataset.clicks = currentClick + 1
    })
}


//
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        //dataset : gets the value of the data-clicks attribute in your HTML
        currentClick = parseInt(btn.dataset.clicks)
        btn.dataset.clicks = currentClick + 1
        // Go to Elements tab on your console to see results of 
        // how many times each of the buttons are clickes.
    })
})

const arr = [1, 2, 3];
const newArr = [2, 4, 6]
arr.map((a) => {
    return a * 2
}) 