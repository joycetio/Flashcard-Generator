var inquirer = require("inquirer");
var fs = require("fs");

//holds the value whether user chooses "basic" or "cloze" flashcard
var cardType = process.argv[2].toLowerCase(); 

//if else statement to determine which constructor to run based on cardType 
if (cardType === "basic") {
	var BasicCard = require("./BasicCard");
} else if (cardType === "cloze") {
	var ClozeCard = require("./ClozeCard"); 
} else {
	console.log("Wrong app! Please choose 'basic' or 'cloze' to decide which flashcard you want to use.")
};