const readline = require("readline");
const prompt = require("prompt-sync")();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`What is your name ?`, name=> {
    console.log(`hi ${name}`)
    rl.close();
});


// package npm i prompt-sync

const name = prompt("What is your name ?");
console.log(`Hi ${name}`);