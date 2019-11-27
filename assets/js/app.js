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
var incNum = document.getElementById('incNum');
var incSym = document.getElementById('incSym');
var numChar = document.getElementById('numChar');

// Add a click function to the generate password button
generateButton.onclick = function(e) {

    //First make sure the user set a length and that the length is in the correct range
    if (numChar.value != "") {
        if (numChar.value < 8 || numChar.value > 128) {
            // If the length is incorrect, alert the user and stop the script
           return alert('The password length must be 8-128 characters.');
        }
    } else {
        // If the length isn't set, alert the user and stop the script
        return alert('The password length must be 8-128 characters.');
    }
    
    //Initialize array to hold user-selected password ingredients
    var ingredients = [];

    //Initialize var that will be used to ensure that a user has selected at least two of the ingredients
    var numIngredients = 0;

    if (incLower.checked == true) {
        // Log that this ingredient was selected
        numIngredients++;

        //push the array related to this to the ingredients array
        ingredients.push(lowers);
    }

    if (incUpper.checked == true) {
        // Log that this ingredient was selected
        numIngredients++;

        //push the array related to this to the ingredients array
        ingredients.push(uppers);
    }

    if (incNum.checked == true) {
        // Log that this ingredient was selected
        numIngredients++;

        //push the array related to this to the ingredients array
        ingredients.push(numbers);
    }

    if (incSym.checked == true) {
        // Log that this ingredient was selected
        numIngredients++;

        //push the array related to this to the ingredients array
        ingredients.push(symbols);
    }

    //If numIngredients is less than 2, alert the user and stop the script
    if (numIngredients < 2) {
        return alert("You must select at least two password ingredients.");
    }

    // Assuming all is good above, let's generate that password

    // Initialize a variable to hold the password
    var newPass = "";

    // This loop will generate a character each time it runs so let's run it numChar times
    for (var i = 0; i < numChar.value; i++) {

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