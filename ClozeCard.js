//inquirer npm package
var inquirer = require("inquirer");

var clozeFlashcard = function() {
    //clozeCard constructor function that takes in text and cloze arguments
    function clozeCard(text, cloze) {
        this.text = text;
        this.cloze = cloze;
    };

    var harryPotterCloze = new clozeCard("Emma Watson played the role of Hermione Granger in the Harry Potter movie series.", "Emma Watson");

    var correctAnswerCloze = harryPotterCloze.cloze.trim();

    inquirer.prompt({
        name: "partial",
        message: "...played the role of Hermione Granger in the Harry Potter movie series."
    }).then(function(userAnswer) {

        //stores what the user answered into a variable
        var userInput = userAnswer.partial;

        //if else statement that determines if the answer is correct or not 
        if (userInput === correctAnswerCloze) {
            console.log("Correct!")
            console.log("The answer is " + harryPotterCloze.cloze);
            console.log(harryPotterCloze.text);
        } else {
            console.log("That's not the correct answer.")
            console.log("The answer is " + harryPotterCloze.cloze);
            console.log(harryPotterCloze.text);
        }

    });

};

clozeFlashcard();

//exports the module 
module.exports = clozeFlashcard;
