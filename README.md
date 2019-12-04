# Password Generator

## Summary

A random password generator that creates secure passwords between 8 and 128 characters using at least two of the following categories as selected by the user: lowercase letters, uppercase letters, numbers, symbols.

## Prerequisites

- Web Browser (Chrome, Safari, Firefox, etc)
- [JavaScript](https://enablejavascript.co/)

## Installing

Copy the repository link.

```
https://github.com/amandalatkins/password-generator.git
```

Clone the repository to your local development environment

```
git clone https://github.com/amandalatkins/password-generator.git
```

Open ``index.html`` in your prefered web browser

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com)

## Deployed Link

* [See Live Site](https://amandalatkins.github.io/password-generator)

## Screenshots

![Mobile View -- index.html](/assets/screenshot.jpg)

## Code Snippets

The following snippet shows how the script randomly assigns characters from randomly chosen categories:

```
    // This loop will generate a character each time it runs so let's run it numChar times
    for (var i = 0; i < numChar; i++) {

        //First, generate a random number between 0 and the length of ingredients in order to select a random ingredient category
        var ingredientCategory = Math.floor(Math.random() * ingredients.length);

        //Then, generate a random number between 0 and the length of the specific ingredient category to select a random character from that category
        var characterIndex = Math.floor(Math.random() * ingredients[ingredientCategory].length);

        //Now let's add the character to our newPass string
        newPass += ingredients[ingredientCategory][characterIndex];

    }
```

This code snippet shows how the script determines that a user entered a number when asked for password length:

```
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
```

## Authors

* ### Amanda Atkins
    - [Portfolio](https://digitalrainstorm.com)
    - [Github](https://github.com/amandalatkins)
    - [LinkedIn](https://www.linkedin.com/in/amandalatkins)

See also the list of [contributors](https://github.com/amandalatkins/password-generator/contributors) who participated in this project.

## License

This project is licensed under the MIT License 

## Acknowledgments

* [W3Schools](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp) for the tutorial on copying to clipboard