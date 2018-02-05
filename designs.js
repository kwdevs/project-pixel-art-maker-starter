// Select color input
// Select size input

var colorInput = document.getElementById('colorPicker');
var canvasHeight = document.getElementById('inputHeight');
var canvasWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
document.querySelector('input[type=submit]').addEventListener('click', makeGrid(canvasWidth, canvasHeight));

function makeGrid(width, height) {

	//setup variables

	var tableElement = document.getElementById('pixelCanvas');

	var tableWidth = width.getAttribute('value');
	var tableHeight = height.getAttribute('value');				

	//setup the table
	for (i = 0; i <= tableHeight; i++) {
		
			tableElement.insertAdjacentHTML('afterbegin', '<tr></tr>');

	}
}
