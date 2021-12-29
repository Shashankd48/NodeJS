var readline = require('readline-sync');
const newTodoes = [{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Learn Node js',
    isDone: true,
},{
    title: 'Study math',
    isDone: false,
}]
//give todolist and their title : it return the statement completed or not and index also
let search = function(todo,title){
    for(let i=0; i<todo.length; i++){
        if(todo[i].title.toLowerCase() == title.toLowerCase()){
            return {
                isDone: todo[i].isDone,
                index: i+1,
            }
        }
    }
    return {
        isDone: null,
        index: null,
    }
}
//use of findIndex() function
// const index = newTodoes.findIndex(function(todo,index){
//     return todo.title === 'Study math';
// })
// console.log(index); 

//this is posible in javascript
// let result = {
//     title: newTodoes[0].title,
//     isDone: newTodoes[0].isDone,
// }
let title = readline.question('Enter todo title: ')
let result = search(newTodoes,title);
console.log("Is Done yet: ",result.isDone,"\nNo. Todo: ",result.index);