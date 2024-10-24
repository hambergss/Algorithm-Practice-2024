/*input binary string
let the decimal value = 0
let length = the length of the input string
for loop i = 0, i < length, i++
let powerOfTwo = 2 ** length + i + 1 (base 2 starts at 0 then increases each time and to get decimal # you add all the results
decimal value = the length of binary string * powerOfTwo
return decimal value*/

function binaryToDec(binaryInput) {
    let binary = String(binaryInput)
    let decimalValue = 0;
    let length = string.length(binary);
    for (i = 0; i < length; i++) {
        let powerOfTwo = 2 ** length + (i+1);
        decimalValue = Number(length) * powerOfTwo;
        return decimalValue;
    }
};
