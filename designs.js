// Select color input
// Select size input

var colorInput = document.getElementById('colorPicker');
var canvasHeight = document.getElementById('inputHeight');
var canvasWidth = document.getElementById('inputWidth');
var tableElement = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
document.querySelector('input[type=submit]').addEventListener('click', makeGrid(canvasWidth, canvasHeight));

function makeGrid(width, height) {

	//setup variables

	var tableWidth = width.getAttribute('value');
	var tableHeight = height.getAttribute('value');				

	//setup the table
	for (i = 1; i <= tableHeight; i++) {
		
		tableRow = document.createElement('tr');

		for (c = 1; c <= tableWidth; c++) {
			tableCell = document.createElement('td');
			tableRow.appendChild(tableCell);
			// tableCell.innerHTML = i * tableWidth + c + 1;
		}

		tableElement.appendChild(tableRow);
	}
}
