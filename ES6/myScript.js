// alert(document.title);

console.log(document.getElementById('1'));
console.log(document.getElementsByClassName('cOne'));


// change all text
// const myElement = document.querySelectorAll('p');
// myElement.forEach(elements => {
//     elements.textContent = "Welcome";
// });

// console.log(myElement)

const addElement = () =>{
    var text = document.getElementById('comment');
    if(text.value !== ''){
        // now create new element
        const newElement = document.createElement('p');
        newElement.textContent = text.value;
        document.querySelector('.addElement').appendChild(newElement);
        text.value = '';
    }
}

// document.querySelector('#clickMe').addEventListener('click', (event)=>{
//     console.log('button was clicked');
//     console.log(event);
//     event.target.textContent = "I was Clicked";
// })

// document.querySelector('#myForm').addEventListener('input', ()=>{
//     console.log(event.target.value);
// })


// other way to grab form data
document.querySelector('#myForm').addEventListener('submit', event =>{
    event.preventDefault();
    console.log(event.target.fullname.value);
    console.log(event.target.email.value);
    event.target.fullname.value = '';
    event.target.email.value = '';
})
