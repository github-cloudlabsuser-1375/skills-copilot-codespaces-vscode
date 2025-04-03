// function to convert Celsius
// to Fahrenheit
function convertToF(celsius) {
    return (celsius * 9 / 5) + 32;
}
// Driver code
var celsius = 60;
var fahrenheit = convertToF(celsius);
console.log(fahrenheit + " Fahrenheit is equal to " + celsius + " Celsius.");