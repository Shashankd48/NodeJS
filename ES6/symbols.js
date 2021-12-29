let sym1 = Symbol('hello');
console.log(sym1.valueOf());

let obj = {
    name: 'Bruce',
    power: 'Detective',
    [sym1]: 2345
}

// obj[sym1] = 2222;
console.log(obj[sym1]);


