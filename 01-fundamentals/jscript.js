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

const linkAttribute = document.querySelector('[data-link]')
console.log(linkAttribute)

linkAttribute.addEventListener('click', event => {
    event.preventDefault()
    console.log("The event has been prevented successfully!!!")
})