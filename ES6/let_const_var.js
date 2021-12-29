
// let and const both have block scope
if(true){
    let score = 1212;

    // for constant variable and can also be used for functions,objects and arrays
    const pi = 3.14;
}

// error
// console.log('let score = '+score+ '\n const pi = '+pi)


// var variale can be accessed anywhere in the file
if(true){
    if(true){
        var hello = 'hello';
    }
}
console.log(hello);