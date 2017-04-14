//inquirer npm package 
var inquirer = require("inquirer");

var basicFlashcard = function() {
    //basicCard constructor that takes in front and back arguments 
    function basicCard(front, back) {
        this.front = front;
        this.back = back;
    }

    var harryPotter = new basicCard("Who played the role of Hermione Granger in the Harry Potter movie series?", "Emma Watson");

    var correctAnswer = harryPotter.back.trim();

    inquirer.prompt({
        name: "front",
        message: "Who played the role of Hermione Granger in the Harry Potter movie series?"
    }).then(function(userAnswer) {

        //stores what the user answered into a variable
        var userInput = userAnswer.front;

        //if else statement that determines if the answer is correct or not 
        if (userInput === correctAnswer) {
            console.log("Correct!")
            console.log("The answer is " + harryPotter.back);
        } else {
            console.log("That's not the correct answer.")
            console.log("The answer is " + harryPotter.back);
        }

    });

};

basicFlashcard();

//exports the module 
module.exports = basicFlashcard; 
