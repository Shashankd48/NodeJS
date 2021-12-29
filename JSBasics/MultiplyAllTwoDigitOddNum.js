console.log('1st 2 digit odd number = 11\nAnd last 2 digit  odd number = 97');
var mul = 1;
const MAX = 99;
for(let i = 11; i<MAX; i++){
    if(i%2 ==1){
        mul = mul*i;
    }
}
console.log('Multiplication of all two digit odd number = ',mul);