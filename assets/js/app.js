// Store the various ingredients for our passwords in arrays
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppers = [];
for (i = 0; i < lowers.length; i++) {
    uppers.push(lowers[i].toUpperCase());
}
var numbers = [];
for (i = 0; i < 10; i++) {
    numbers.push(i);
}
var symbols = ['!','?','*','&','$','(',')','#'];

// Store our important HTML elements
var generateButton = document.getElementById('generatePass');
var showPass = document.getElementById('showPass');
var copyPass = document.getElementById('copyPass');
var incLower = document.getElementById('incLower');
var incUpper = document.getElementById('incUpper');
var incNums = document.getElementById('incNums');
var incSym = document.getElementById('incSym');
var numChar = document.getElementById('numChar');