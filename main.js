const prompt = require('prompt-sync')({sigint: true});

console.log("Welcome to your To-Do List!\n");

console.log("Select an action: ")

console.log("[1] Create to-do item")
console.log("[2] Complete to do item")

let choice = Number(prompt("> "));

let items = [""];

let statusArray = [""]



while(choice !== 3){
if(choice === 1){
console.log("Create a new item");
let answer = prompt("Enter your to-do item: ");
items.push(answer);
statusArray.push(false)
console.log("To-Do List");
for(let i = 1; i < items.length; i++){
console.log(i + ".  " + items[i])
}
printList();
selectChoice();

} else if(choice === 2){
console.log("Select an item to complete");
let indexChoice = Number(prompt("Enter a number on your list to complete it: "))
if(statusArray[indexChoice] === false)
{statusArray[indexChoice] = true;}
printList();
selectChoice();
} 
}

function selectChoice(){
console.log("Select an action: ")
console.log("[1] Create to-do item")
console.log("[2] Complete to do item")
choice = Number(prompt("> "));
}

function printList(){
console.log("\nCurrent To-Do List: ");
let status = "";
for(let i = 1; i < items.length; i++){ 
    if(statusArray[i] === false){
    status = "[Incomplete] ";
} else if(statusArray[i] === true){
status = "[Complete] ";
}

console.log(i + ".  " + status + items[i])

console.log("")
}
}




