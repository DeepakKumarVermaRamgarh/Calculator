// Get the display input field
let display = document.querySelector('input[type="text"]');

// Get all the buttons
let buttons = document.querySelectorAll('input[type="button"]');

// Loop through each button and assign onclick event
for (let button of buttons) {
    button.onclick = function () {
        // Check if the button value is 'AC' (All Clear)
        if (this.value === 'AC') {
            display.value = ''; // Clear the display
        }
        // Check if the button value is 'DE' (Delete)
        else if (this.value === 'DE') {
            display.value = display.value.toString().slice(0, -1); // Remove the last character from the display
        }
        // Check if the button value is '=' (Equal)
        else if (this.value === '=') {
            display.value = eval(display.value); // Evaluate and display the result
        }
        // For other buttons, concatenate the button value to the display
        else {
            display.value += this.value;
        }
    }
}