//decimal to binary

/* let the binary = "";
let the # = decimalInput;
while loop when number > 0
binary = the # modulo 2 + the binary
# = #/2 and remove the remainder
return binary if input is 0 
outside while loop:
let decimalInput = "whatever decimal #";
let binary = decimalToBinary(decimalInput); runs the function and passes the variable
console.log stuff
*/

function decimalToBinary(decimalInput) {
  let binary = "";
  let number = decimalInput;

  while (number > 0) {
    binary = (number % 2) + binary; // Get the remainder and prepend it to the binary string; This gives the remainder when dividing the decimal number by 2 (either 0 or 1)
    number = Math.floor(number / 2); // Divide the number by 2 and discard the remainder; This divides the number by 2 and rounds it down to the nearest integer
  }

  return binary || "0"; // Return '0' if the input is 0; || logical operator (if input is falsy/ empty so that when the function is run it wont print an empty string)
}

let decimalInput = 13; // Example decimal number
let binary = decimalToBinary(decimalInput);
console.log("Decimal:", decimalInput);
console.log("Binary value:", binary);

//Prepend means to add something to the beginning of something else. In the context of strings, when you prepend a character or substring, you insert it at the start of the string, rather than at the end (which would be appending).
