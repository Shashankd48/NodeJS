const abc = [1,2,3,2,3,10,'shashank'];

var sets = new Set(abc);
sets.add('Dubey');
console.log(typeof sets);
console.log(sets);
console.log(abc);
console.log(sets.has('Shashank'));


sets.delete('shashank');
console.log(sets);
console.log(abc);


// forEach and call back
const loopThrough = (values)=>{
    console.log(values);
}
sets.forEach(loopThrough);


let arrayOfObects = [{
    name: 'Shashank Dubey',
    course: 'BCA'
},{
    name: 'Vishal Dubey',
    course: 'BCA'
},{
    name: 'Vishal Dubey',
    course: 'BCA'
}]
var objSet = new Set(arrayOfObects);
objSet.forEach((values) =>{
    console.log(values.name + '\t'+values.course);
});