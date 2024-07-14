var x = 30;
var y = 10;

function sum(x, y) {
  return x+ y;
}
function subtract(x, y) {
  return x - y;
}
function multiplication(x,y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}
function mod(x, y) {
  return x % y;
}

var addition = sum(x, y);
console.log("Addition of " + x+ " & " + y+ " is " + addition);

var subtraction = subtract(x,y);
console.log("Subtraction of " + x+ " & " +y + " is " + subtraction);

var product = multiplication(x,y);
console.log("Multiplication of " + x+ " & " + y + " is " + product);

var quotient = division(x,y);
console.log("Division of " +x + " & " +y + " is " + quotient);

var remainder = mod(x,y);
console.log("Modulus of " + x + " & " + y+ " is " + remainder);




 