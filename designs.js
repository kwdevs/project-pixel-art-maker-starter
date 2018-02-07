// Declare variable gridHeight and gridWidth which stores user input of height and width. Declare currentColor to hold a string value.

var gridWidth = document.getElementById('inputWidth');
	gridHeight = document.getElementById('inputHeight');
	gridSizeInput = [];

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

// Define tableBody, used to attach tr and td to new element to be appended to
// DOM
// Define canvasHTML as value of #pixelCanvas selection to attach
// rows and columns.
    var canvasHTML = document.getElementById('pixelCanvas');
    	tableBody = document.createElement('tbody');
    var	tableRow;
    var	tableCol;

// Make sure grid is clear
	canvasHTML.innerHTML = '';

//Attach a row then attach columns in a loop

	for (row = 0; row < height; row++) {
		tableRow = document.createElement('tr');
		
		for (col = 0; col < width; col++) {
			tableCol = document.createElement('td');
			tableRow.appendChild(tableCol);
		}
		canvasHTML.appendChild(tableRow);
	}
}

//  Define variables for colorPicker feature.
var colorElement = document.getElementById('colorPicker');
var currentColor = document.getElementById('colorPicker').value;

// Setup event listening for changes to user selected color and save them to currentColor.
colorElement.addEventListener('input', function() {
	currentColor = document.getElementById('colorPicker').value;
});

//  Setup event listening on tableElement and respond on bubbling event.target of click on td elements.
tableElement.addEventListener('click', function(event){
	// variable to search for whether class exists for colored td
	var cellCurrentColor = event.target.classList.contains('bgcolor');
	
	if (event.target.nodeName.toLowerCase() === 'td' && cellCurrentColor === false) {
		//add class to toggle bgcolor.
		event.target.setAttribute('bgcolor', currentColor);
	}
});
