/* Currency converter*/
const convertToRs = (doller) =>{
    if(typeof doller === 'number'){
        return doller * 70;
    }
    else{
        throw Error('Amount need to be in number')
    }
}

try {
    const myValue = convertToRs(5);
    console.log(myValue);
} catch (error) {
    console.log(error);
}
console.log('I will not run if the program craches');