

let input = document.getElementById("inputbox");  // input field to display the value
let buttons = document.querySelectorAll("button");  // get all buttons on the page
let string = "";  // initialize empty string to store the input

// Convert NodeList to Array and add event listeners for each button
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            // When the "=" button is clicked, evaluate the expression and show the result
            try {
                string = eval(string);  // use eval to evaluate the expression
                input.value = string;  // display the result in the input box
            } catch (error) {
                input.value = "Error";  // handle invalid expressions
                string = "";  // reset string for a new calculation
            }
        } else if (e.target.innerHTML === 'AC') {
            // Handle 'C' for clear button
            string = "";
            input.value = "";
        } 
        else if (e.target.innerHTML== 'DEL'){
            string = string.substring(0,string.length-1);
            input.value= string;
        }
        else {
            // Append button value to the string (except "=")
            string += e.target.innerHTML;
            input.value = string;  // display the current input in the input box
        }
    });
});
