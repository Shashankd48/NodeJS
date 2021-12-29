// Do not use arrow function in this case
"use strict";
var price = 700;

const cameras = {
    price: 600,
    weight: 2000,
    brand: 'Sony',
    myDes: function(){
        return `This ${this.brand} camera is of ${this.price}$`
    }
    // myDes: function(){
    //     return `This ${this.brand} camera is of ${this.price}$`
    // },
}


console.log(cameras.myDes());

var a = 5;
var b = '5';

if(a===b){
    console.log('true');
}else{
    console.log('false');
}

console.log('5' / 5);
console.log(false - 5);

// Values that interpret as flase

// false
// 0
// null
// undefined
// ''

// Values that interpret as true
// empty array or obejct and all other things a part from above values.