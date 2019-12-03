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

// Store our important HTML elements and initialize variables we will use
var generateButton = document.getElementById('generatePass');
var showPass = document.getElementById('showPass');
var copyPass = document.getElementById('copyPass');
var numChar;
var ingredients = [];

// Checks whether the character count entered is between 8 and 128 characters
function checkNumChar(numChar) {

    // If the user clicked 'cancel' exit the function
    if (numChar == null) {
        return;
    }

    // First make sure the user inputted a whole number
    if (Number.isInteger(parseInt(numChar))) {
        // Then make sure it is between 8 and 128
        if (numChar < 8 && numChar > 128) {
            return false;
        } else {
            return true;
        }
    } else {
        // If the user didn't input an integer, go ahead and return false
        console.log
        return false;
    }
}

// This function collects all the user inputs from the prompts and confirms
function collectInfo() {

    // First let's collect the password length
    numChar = prompt("How many characters should your password be? Between 8 and 128 characters is required.");
   
    // Now let's check that it's within the right character count
    var goodCharCount = checkNumChar(numChar);

    // If it's not within the right character count, let's run a loop to collect a new password length until it is the correct length
    while (goodCharCount == false) {
        numChar = prompt("The character count must be between 8 and 128! Please enter a new password length:");
        goodCharCount = checkNumChar(numChar);
    }

    // When we have a valid character count and the user didn't cancel, collect the rest of the info
    if (goodCharCount) {
       
        var useLowers = prompt("Would you like to use lowercase Letters"

    }

}

// Add a click function to the generate password button
generateButton.onclick = function(e) {

    // Run collectInfo function and store the values
    var userInput = collectInfo();
    
    //Initialize array to hold user-selected password ingredients
    var ingredients = [];

    //Initialize var that will be used to ensure that a user has selected at least two of the ingredients
    var numIngredients = 0;

    // Assuming all is good above, let's generate that password

    // Initialize a variable to hold the password
    var newPass = "";

    // This loop will generate a character each time it runs so let's run it numChar times
    for (var i = 0; i < numChar; i++) {

        //First, generate a random number between 0 and the length of ingredients in order to select a random ingredient category
        var ingredientCategory = Math.floor(Math.random() * ingredients.length);

        //Then, generate a random number between 0 and the length of the specific ingredient category to select a random character
        var characterIndex = Math.floor(Math.random() * ingredients[ingredientCategory].length);

        //Now let's add the character to our newPass string
        newPass += ingredients[ingredientCategory][characterIndex];

    }

    //Phew, our new pass is generated! Let's display it in the showPass element
    showPass.innerText = newPass;

};