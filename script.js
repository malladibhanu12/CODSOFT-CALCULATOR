// Get display element
var display = document.getElementById('display');

// Add event listeners to buttons
var buttons = document.getElementsByClassName('buttons')[0];
buttons.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    var value = event.target.innerText;
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === 'DEL') { // Added condition for 'DEL' button
      deleteLastDigit();
    } else {
      updateDisplay(value);
    }
  }
});

// Update display with button value
function updateDisplay(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Delete last digit
function deleteLastDigit() {
  display.value = display.value.slice(0, -1);
}

// Perform calculation
function calculate() {
  try {
    var result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}