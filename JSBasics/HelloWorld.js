console.log("Welcome to the world of JavaScript");
var readline = require('readline-sync');
// let name = readline.question("Enter your name: ");
// let id  = readline.question("Enter your id = ");
// var clear = require('clear');
// clear();
// console.log("Hello! Mr.",name,"\nYour Id : ",id);

// Array in javaScript
let superHerors = ['Captain America','Iron Man','Spider Man'];
console.log(superHerors);
const dcHerors = ['Super Man','Aquaman','Wonder Women'];
// console.log(dcHerors);
for(let i = 0; i<dcHerors.length; i++){
    console.log(dcHerors[i]);
}
console.log(dcHerors.pop()," is poped");
console.log(dcHerors.push('Flash')," is pushed");
console.log(dcHerors);
console.log(`Total ${dcHerors.length+superHerors.length} heroes available`);
