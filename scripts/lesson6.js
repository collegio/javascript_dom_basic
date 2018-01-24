/*

	Learn to Code JavaScript: Lesson 6
	The Document Object Model

	Let's perform some basic DOM manipulation on our HTML.

*/

// First, let's grab some of the messages by id and class name and display
// them in our console

console.log(document.getElementById("firstMessage").innerHTML);

// Remember, getElementByClassName() returns an array of elements!
console.log(document.getElementsByClassName("secondMessage")[0].innerHTML);
console.log(document.getElementById("thirdMessage").innerHTML);

function displayCustomMessage() {
	var customMessage = document.getElementById("custom_message").value;
	alert(customMessage);
}