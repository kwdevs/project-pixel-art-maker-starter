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
	gridSizeInput[1] = gridHeight.value;

	makeGrid(gridSizeInput[0], gridSizeInput[1]);
}, true);

 
// makeGrid accepts 2 parameters, heigh and width, derived from user input stored in gridSizeInput array.

function makeGrid(height, width) {

// Define variable tableRowHTML as a tr html string
// Define tableColHTML as a td html string.
// Define canvasHTML as value of #pixelCanvas selection to attach
// rows and columns.
var tableRowHTML = document.createElement('tr');
    tableColHTML = document.createElement('td');
    canvasHTML = document.getElementById('pixelCanvas');

//Attach a row then attach columns in a loop

	for (row = 0; row <= height; row++) {
		canvasHTML.insertAdjacentHTML('afterbegin', '<tr></tr>');
	}

}
