# HW-Flashcard-Generator

## Description on how to use the app: 
Choose whether you want to use a basic type of flashcard or a cloze type of flashcard by typing "basic" or "cloze" in your CLI. 

## Overview: 
In this week's assignment, you will create the backend for a basic flashcard application.
The backend will essentially constitute an API that allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front ("*Who was the first president of the United States?*"), and a back ("*George Washington*").
2. **Cloze-Deleted** flashcards, which present partial text ("... *was the first president of the United States.*"), and the full text when the user requests it ("*George Washington was the first president of the United States.*")

**Cloze Deletions**

A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:
"George Washington was the first president of the United States."
...We can create a "cloze deletion" by removing the words "George Washington":
"... was the first president of the United States."
This is useful for building flash card applications that forces users to remember the important part of a sentence, and is a common device in educational applications.
A flash card built this way has three parts:

1. The **full text**. This is the entire sentence users need to remember: "George Washington was the first president of the United States."
2. The **cloze deletion**. This is the text we've chosen to remove: "George Washington".
3. The **partial text**. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.

## Instructions: 
* Create a new GitHub repository, named Flashcard-Generator or something similar. Clone to your local drive. 
* Create a BasicCard constructor. It should accept front and back arguments.
* Create a ClozeCard constructor. It should accept text and cloze arguments.
    * ClozeCard should have a property or method that contains or returns *only* the cloze-deleted portion of the text. 
    * ClozeCard should have a property or method that contains or returns *only* the partial text. 
    * ClozeCard should have a property or method that contains or returns *only* the full text. 
    * ClozeCard should throw or log an error when the cloze deletion does *not* appear in the input text. 
    * Use prototypes to attach these methods, wherever possible. 

As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards_you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus: 
The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.  

## Technologies Used: 
* npm packages 
* node.js
* javascript / jQuery 
* CLI 

## Code Explanation: 
By using three modules instead of one, it helped me organize my code and be more efficient. 
* **flashcard.js**: Contains an if else statement that decides which type of flashcard to run based on user input. 
* **BasicCard.js**: Contains a constructor that takes in front and back arguments. 
* **ClozeCard.js**: Contains a constructor that takes in text, and cloze arguments.

if-else statement: 
````
if (cardType === "basic") {
    var BasicCard = require("./BasicCard");
} else if (cardType === "cloze") {
    var ClozeCard = require("./ClozeCard"); 
} else {
    console.log("Wrong app! Please choose 'basic' or 'cloze' to decide which flashcard you want to use.")
};
````



