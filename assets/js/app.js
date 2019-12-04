// Store the various ingredients for our passwords in arrays
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppers = [];
lowers.forEach(function(letter) {
    uppers.push(letter.toUpperCase());
});
var numbers = [];
for (i = 0; i < 10; i++) {
    numbers.push(i);
}
var symbols = ['!','?','*','&','$','(',')','#',';'];

// Store our important HTML elements and initialize variables we will use
var generateButton = document.getElementById('generatePass');
var showPass = document.getElementById('showPass');
var copyPass = document.getElementById('copyPass');
var copyPassContainer = document.getElementById('copyPassContainer');
var numChar;

// Add a click function to the generate password button
generateButton.onclick = function() {

    // Run collectInfo function and validate and store user inputs
    var ingredients = collectInfo();

    // Initialize a variable to hold the password
    var newPass = "";

    // This loop will generate a character each time it runs so let's run it numChar times
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

};


// This function collects all the user inputs from the prompts and confirms
function collectInfo() {

    // First let's collect the password length and store it in the global variable numChar
    numChar = prompt("How many characters should your password be? Between 8 and 128 characters is required.");
   
    // Now let's check that it's within the right character count
    var goodCharCount = checkNumChar(numChar);

    // If it's not within the right character count, let's run a loop to collect a new password length until it is the correct length
    while (goodCharCount == false) {
        numChar = prompt("The that is an invalid password length. Please enter a new password length between 8 and 128:");
        goodCharCount = checkNumChar(numChar);
    }

    // When we have a valid character count and the user didn't cancel so collect the rest of the info
    if (goodCharCount) {
        // Prompt the user to confirm the different password ingredients
       var ingredients = getPasswordIngredients();

       // Continue to prompt the user if they don't select at least two ingredients
       while (ingredients.length < 2) {
           alert("You must select two or more ingredients!");
           ingredients = getPasswordIngredients();
       } 
    }

    return ingredients;

}

// Checks whether the character count entered is between 8 and 128 characters
function checkNumChar(numChar) {
    // If the user clicked 'cancel' exit the function
    if (numChar == null) {
        return;
    }

    // Check to see if there are any letters or symbols in the numChar string
    var isNotNumbers = findLetters(numChar);
    if (isNotNumbers) {
        // If there are, go ahead and ask the user to input numChar again
        return false;
    }

    //Store numChar as a number instead of a string
    numChar = parseInt(numChar);
    // Then make sure it is between 8 and 128
    if (numChar < 8 || numChar > 128) {
        return false;
    } else {
        return true;
    }
}

// Make sure there are no letters/symbols in numChar
function findLetters(numChar) {
    
    // Loop through the numChar string
    for (var i = 0; i < numChar.length; i++) {
        // compare each character to the numbers array
        if (numbers.indexOf(parseInt(numChar[i])) == -1) {
            // if the character doesn't exist in the numbers array, it is not a number so return true
            return true;
        }
    }
    // all numbers? return false!
    return false;
}
    

// This function collects the password ingredients and makes sure that at least two are chosen
function getPasswordIngredients() {

    // Initialize an array to hold our ingredients;
    var ingredients = [];

    // Ask the user if they want to include each ingredient category and then add the arrays containing those characters to the ingredients array
    var useLower = confirm("Would you like to use lowercase letters?");
    if (useLower === true) {
        ingredients.push(lowers);
    }
    var useUpper = confirm("Would you like to use uppercase letters?");
    if (useUpper === true) {
        ingredients.push(uppers);
    }
    var useNumbers = confirm("Would you like to use numbers?");
    if  (useNumbers === true) {
        ingredients.push(numbers);
    }

    var useSymbols = confirm("Would you like to use symbols?");
    if (useSymbols === true) {
        ingredients.push(symbols);
    }
    return ingredients;
}

// Add a click function to initiate copy to clipboard
copyPass.onclick = function() {

    // Make sure there is a password
    if (copyPassContainer.value !== "") {

        // I learned this technique from W3 Schools
        // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

        // Select the text in the ShowPass container
        copyPassContainer.select();

        // Make sure to select all the text (for mobile)
        copyPassContainer.setSelectionRange(0,99999);

        // Tell the document to execute the inherit 'copy' function
        document.execCommand('copy');

        // Alert the user that their new password was copied
        alert("Your password "+copyPassContainer.value+" has been copied to the clipboard!");
    } else {
        alert("You need to generate a password first!");
    }
}