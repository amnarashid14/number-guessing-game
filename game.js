#! /bin/usr/env node
import inquirer from "inquirer";
// computer will generate a random number
//user input for guessing number
//compare user input with computer gen number and show result
const randomNumber = Math.floor(Math.random() * 100); //Math.random()  ,,,  agr 0 nhi chahiyeto func*number of digits+1 dakna h
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1-100.....?",
    },
]);
console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}
else {
    console.log("Try again");
}
