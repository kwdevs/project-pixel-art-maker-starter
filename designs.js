// Select color input
// Select size input

var colorInput = document.getElementById('colorPicker');
var canvasHeight;
var canvasWidth;
var tableElement = document.getElementById('pixelCanvas');
var GridSizeSubmitButton = document.querySelector('input[type=submit]');

// When size is submitted by the user, call makeGrid()
GridSizeSubmitButton.addEventListener('click', function () {
	canvasWidth = document.getElementById('inputWidth');
	console.log("canvasWidth", canvasWidth);
	canvasHeight = document.getElementById('inputHeight');
	console.log("canvasHeight", canvasHeight);

	// makeGrid(canvasWidth, canvasHeight);
});

// function makeGrid(width, height) {
	//setup variables

	// var tableWidth = width.getAttribute('value');
	
	// var tableHeight = height.getAttribute('value');		
		

	//setup the table
	// for (i = 1; i <= tableHeight; i++) {
		
	// 	tableRow = document.createElement('tr');

	// 	for (c = 1; c <= tableWidth; c++) {
	// 		tableCell = document.createElement('td');
	// 		tableRow.appendChild(tableCell);
	// 	}

	// 	tableElement.appendChild(tableRow);
	// }
// }
