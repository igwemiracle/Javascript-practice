const grandParent = document.querySelector('#grand-parent')

grandParent.style.color = "red"

// How to get access to the Children of the Grand Parent
// using the "children" property.
grandParent.children[0].style.color = "blue"
grandParent.children[1].style.color = "blue"

//Access the First child of Parent 1
firstChild = grandParent.children[0]
console.log(firstChild.children[0])