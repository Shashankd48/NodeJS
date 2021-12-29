var readline = require('readline-sync');
let student = {
    name: 'Shashank',
    age: 21,
    course: 'Node Js'
}
let employee = {
    name: 'Vikas',
    age: 25,
    batch: 'Networking'
}
// console.log(student.name);
let display = function(myObject){
    console.log('Hello',myObject.name);
    if(myObject == student)
    return {
        marks: 450,
        position: '1st'
    }
    else
    return{
        salary: 15999,
        job: 'Asistent Programmer'
    }
}
// let myObject = readline.question('Canditate type: ');
let recieved =  display(student);
console.log(recieved);