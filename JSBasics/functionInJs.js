// This is how we declare function in javascript
var readline = require('readline-sync');
let nam = readline.question('Enter your name: ');
let num = function(name = 'NoName'){
    console.log('Hello ',name);
    return null;
}
console.log(num());
