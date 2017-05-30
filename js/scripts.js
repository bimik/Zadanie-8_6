// scripts.js

var a = prompt('Podaj a');
var b = prompt('Podaj b');
var value = (a * a) + (2 * a * b) - (b * b)
alert(value);
console.log(' a: ' + a + ' and b: ' + b + ' is equal to: ' + value);

if ( value < 0) {
    console.log('Wartość ujemna');
} else if (value > 0) {
    console.log('Wartość dodatnia');
} else {
    console.log('Wartość równa zero');
}