
// dot-dot operator treats multiple parameter as array
const deposit = (...money)=>{
    let balance = 0;
    for(let i=0; i<money.length; i++){
        balance += money[i];
    }
    return balance;
}

// console.log(deposit([100,200,300]));

console.log(deposit(100,300,100));

// find maximum number from an array
let addMoney = [100,200,50];
console.log(...addMoney);
console.log(Math.max(...addMoney));