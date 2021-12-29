var john = {
    name: 'I am John',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am Marry',
    age: 22,
    isActive: true
}

var sam = {
    name: 'I am Sam',
    age: 28,
    isActive: false
}

let users = new Map();

users.set('john', john);
users.set('marry', marry);
users.set('sam', sam);

console.log(users.get('john'));
console.log(users.keys());
console.log(users.values());

// for..of 
for (const key of users.values()) {
    console.log(key.name);
}

for (const [key,value] of users.entries()) {
    console.log(key + " = " + value.name + "\n");
}

users.forEach((value,key) => {
    console.log(key + ' = ' + value.isActive + "\n");
});


// Array of arrayss

var arrofArr = [['one','1'], ['two','2'], ['three',3]];

var newMap = new Map(arrofArr);
for (const [key,value] of newMap) {
    console.log(key + ' = ' + value + '\n');
}

