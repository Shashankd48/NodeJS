var john = {
    name: 'I am John',
    age: 24,
    isActive: true,
}

var marry ={
    name: 'I am marry',
    age:23,
    isActive: true,
}

var sam={
    name:'I am sam',
    age:29,
    isActive: false,
}

let users = new Map()
users.set('john',john);
users.set('marry',marry);
users.set('sam',sam);

console.log(users.size);
console.log(users.get('marry'));
console.log(users.keys());
console.log("\n\tName:\t\t\tAge\t\tActive");
for(const value of users.values())
{
    console.log('\t'+value.name+'\t\t'+value.age+'\t\t'+value.isActive);
}

// for (const [key,value] of users.entries()) {
//     console.log(key + ' = '+value.name);
// }

users.forEach((value,key)=>console.log(key + ' = '+value.name))
