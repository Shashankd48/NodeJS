// default value for parameters
var getData = (temp, cold = 10) =>{
    if(temp<cold){
        return 'This is cold here';
    }else{
        return 'This is not so cold'
    }
}

console.log(getData(2,22));

let wrath = 'angry';
// dynamic object creation
let age = 28;
const myObject = {
    name: 'john',
    age: 23,
    angry: 99,
    info(){
        console.log('Name: '+this.name+'\nAge: '+this.age);
    }
}
console.log(myObject.age);
myObject.info();

console.log(myObject[wrath]);