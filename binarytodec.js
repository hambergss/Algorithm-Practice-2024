//binary to decimal

/*input binary string
let the decimal value = 0
let length = the length of the input string
for loop i = 0, i < length, i++
let powerOfTwo = 2 ** length + i + 1 (base 2 starts at 0 then increases each time and to get decimal # you add all the results
decimal value = the length of binary string * powerOfTwo
return decimal value*/

function binaryToDec(binaryInput) {
  let binary = String(binaryInput);
  let decimalValue = 0;
  let length = binary.length;

  for (let i = 0; i < length; i++) {
    let currentBit = Number(binary[i]); //currentBit gets the value of the binary digit (0 or 1), and powerOfTwo is 2 raised to the appropriate power.
    let powerOfTwo = 2 ** (length - 1 - i); // The correct power of 2 based on the position
    decimalValue += currentBit * powerOfTwo; // Multiply bit by its corresponding power of 2
  }

  return decimalValue;
}

let binaryInput = "1101"; //set binaryInput as a binary #
let decimal = binaryToDec(binaryInput); //let the binaryInput pass through the function and produce the decimal # corresponding to the binary
console.log("binary: ", binaryInput); 
console.log("decimal: ", decimal);
