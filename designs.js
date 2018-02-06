// Declare variable gridHeight and gridWidth which stores user input of height and width. Declare currentColor to hold a string value.

var gridWidth = document.getElementById('inputWidth');
	gridHeight = document.getElementById('inputHeight');
	gridSizeInput = [];
	currentColor = '';

// Define variable tableElement to hold table DOM element

var tableElement = document.getElementById('pixelCanvas');

// Define variable sizeSubmitButton to hold submit button in size form

var sizeSubmitButton = document.getElementById('sizePicker').elements['submitButton'];

// Listen for form sizeSubmitButton submit button to be clicked. When clicked, run function to update gridSizeInput array and call makeGrid function.

sizeSubmitButton.addEventListener('click', function(event) {
	event.preventDefault();

	// Store the value of grid size forum in gridSizeInput
	gridSizeInput[0] = gridWidth.value;
	console.log("gridSizeInput[0]", gridSizeInput[0]);
	gridSizeInput[1] = gridHeight.value;
	console.log("gridSizeInput[1]", gridSizeInput[1]);

	
}, true);

 
// makeGrid accepts 2 parameters, heigh and width, derived from user input stored in gridSizeInput array.

function makeGrid(height, width) {

// Define variable tableRowHTML as a tr html string

// Define tableColHTML as a td html string.

// Define canvasHTML as value of #pixelCanvas selection.

// Check if creating first row

// Create and attach gridSizeInput[0], rows value, to canvasHTML.
// If first row, attach adjacent as first, else attach adjacent as
// last element.


}
