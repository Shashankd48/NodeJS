// function crazy(){
//     console.log(this);
// }

const crazy = () =>{
    console.log(this);
}
var button = document.getElementById('me');
button.addEventListener('click',crazy);
// crazy();

// confirm("Welcome");
// var abc = prompt("Enter Value here");
// alert(abc);
