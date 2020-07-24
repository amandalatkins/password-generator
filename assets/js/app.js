// Store the various ingredients for our passwords in arrays
const lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppers = [];
lowers.forEach(function(letter) {
    uppers.push(letter.toUpperCase());
});
const numbers = [];
for (i = 0; i < 10; i++) {
    numbers.push(i);
}
const symbols = ['!','?','*','&','$','(',')','#',';'];

// Store our important HTML elements and initialize variables we will use
const generateButton = document.getElementById('generatePass');
const showPass = document.getElementById('showPass');
const copyPass = document.getElementById('copyPass');
const copyPassContainer = document.getElementById('copyPassContainer');
const errorCont = document.getElementById('passErrors');
const successCont = document.getElementById('copySuccess');

// Store our input elements
const upperInput = document.getElementById('uppercase');
const lowerInput = document.getElementById('lowercase');
const numInput = document.getElementById('numbers');
const symInput = document.getElementById('symbols');
const charInput = document.getElementById('numChar');

// Inititalize global vars
let errorMsg = [];
let numChar;

// Collect password info on page load and generate a password
init();

function init() {

    numChar = charInput.value;

    if (numChar < 8 || numChar > 48) {
        errorMsg.push('Length must be between 8 and 48.');
    }

    let ingredients = [];

    if (upperInput.checked) ingredients.push(uppers);

    if (lowerInput.checked) ingredients.push(lowers);

    if (symInput.checked) ingredients.push(symbols);

    if (numInput.checked) ingredients.push(numbers);

    if (ingredients.length < 2) {
        errorMsg.push("You must selected at least two ingredients.");
    }

    if (errorMsg.length) {
        return displayErrors();
    } else {
        return generatePass(ingredients);
    }

}

function displayErrors() {
    errorCont.innerHTML = '<p>'+errorMsg.join(' ')+'</p>';
}

generateButton.onclick = init;

function generatePass(ingredients) {

    let newPass = "";

    for (var i = 0; i < numChar; i++) {

        //First, generate a random number between 0 and the length of ingredients in order to select a random ingredient category
        var ingredientCategory = Math.floor(Math.random() * ingredients.length);

        //Then, generate a random number between 0 and the length of the specific ingredient category to select a random character from that category
        var characterIndex = Math.floor(Math.random() * ingredients[ingredientCategory].length);

        //Now let's add the character to our newPass string
        newPass += ingredients[ingredientCategory][characterIndex];

    }

    //Phew, our new pass is generated! Let's display it in the showPass element
    showPass.innerText = newPass;
    copyPassContainer.value = newPass;

    return;
}

// Add a click function to initiate copy to clipboard
copyPass.onclick = function() {

    // Make sure there is a password
    if (copyPassContainer.value !== "") {

        // Select the text in the ShowPass container
        copyPassContainer.select();

        // Make sure to select all the text (for mobile)
        copyPassContainer.setSelectionRange(0,99999);

        // Tell the document to execute the inherit 'copy' function
        document.execCommand('copy');

        // Alert the user that their new password was copied
        // alert("Your password "+copyPassContainer.value+" has been copied to the clipboard!");
        return successCont.innerHTML = "<br>Copied!";
    } else {
        errorMsg.push("You need to generate a password first!");
        return displayErrors();
    }
}