// runtime input
var readline = require('readline-sync');

// clear console
var clear = require('clear');
clear();

const convertToRs = doller =>{
    if (!isNaN(doller)) {
        return  parseInt(doller) * 73;
    } else {
        throw Error('\n\tAmount needs to be in number');
    }
}

let doller = readline.question('\n\tEnter Amount in doller: ');

try{
    var myValue = convertToRs(doller);
    console.log("\n\tAmount in Rupees: "+myValue);
} catch(e){
    console.log(e.message);
}