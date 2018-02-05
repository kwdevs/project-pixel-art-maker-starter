// Select color input
// Select size input

var colorInput = document.getElementById('colorPicker');
var canvasHeight = document.getElementById('inputHeight');
var canvasWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {

	//setup variables

	var tableElement = document.getElementById('pixelCanvas');

	var tableWidth = width.getAttribute('value');
	var tableHeight = height.getAttribute('value');				

	//setup the table
	for (i = 0; i <= tableHeight; i++) {
		if (i === 0) {
			tableElement.insertAdjacentHTML('afterbegin', '<tr></tr>');
		}

	}
}
