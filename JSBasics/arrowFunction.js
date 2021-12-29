//Normal Function
// let seyHello = function(name){
//     return `Hello ${name} !`;
// }

//Now arrow function
// const seyHello = (name) => `Hello ${name} !`;
// console.log(seyHello('Shashank'))

//Assignment
const myTodos = [{
    title: 'Buy Bread',
    isDone: true
},{
    title: 'Code for Node Js',
    isDone: true
},{
    title: 'Solve Math problem',
    isDone: false
},{
    title: 'Complete assignment',
    isDone: true
},{
    title: 'launch',
    isDone: false
},{
    title: 'Watch friends',
    isDone: false
}]

const isNotDone = (todo) =>{
    const result = todo.filter((todo) => todo.isDone === false)
    let final = [];
    for(let i = 0; i<result.length; i++){
        final[i] = result[i].title;
    }
    return final;
}
isNotDone(myTodos).forEach((title)=>console.log(title));

//using arrow function with this keyword
const cameras = {
    model: 'Canon 200D',
    price: 25000,
    lens: '24MP',
    mydes(){
        return `The ${this.model} is an amazing camera`;
    }
}
console.log(cameras.mydes());