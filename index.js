function factorial(n) {
  //guard clause
  if (n < 1) {
    return;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(7));

function newFactorial(n) {
  if (n > 0) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  } else {
    return;
  }
}
