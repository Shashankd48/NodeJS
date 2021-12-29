if(true){
    var score = "Hello";
}
console.log(score);

// Arrow function

// first way to create function
const sayHello = function(name){
  return "Hey there, "+ name + "!"
}

// Second way to create function
function sayHi(name){
  return "Hi there, "+ name + "!"
}

console.log(sayHello('Sammy'));
console.log("\n" + sayHi('Sammy'));

// now arrow funtion
const sayArrow = (name) =>{
  return `Welcome to Lco Mr/Miss: ${name}`;
}

const advanceArrow = (name,lname) => "Welcome to Arrow fuction ";

console.log(sayArrow("Natasha"));