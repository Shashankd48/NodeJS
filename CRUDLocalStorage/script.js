var submit = document.getElementById('submit');

const storeInfo = () =>{
    let fullName = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    if(fullName !=='' && email !== ''){
        localStorage.setItem(fullName,email);
    }
}
submit.addEventListener('click',storeInfo);

console.log(localStorage.getItem('Shashank Dubey'));
console.log(localStorage.length);
console.log(typeof localStorage);
// localStorage.setItem('Shashank Dubey','shsahs')
// localStorage.clear();
localStorage.removeItem('vikas Pandey');