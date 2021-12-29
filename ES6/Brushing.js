var student = {
    firstName: 'Shashank',
    lastName: 'Dubey',
    course: 'BCA',
    enrollmentNumber: '190977487'
}

// console.log(student.course);

const todos = [{
    title : 'Buy Bread',
    isDone: true
},{
    title: 'Study JS',
    isDone: false
},{
    title: 'Cook your dinner',
    isDone: false
},{
    title: 'Watch Movies',
    isDone: true
}];

const thingsDone = todos.filter((todo) =>todo.isDone === true);
const thingsNotDoneYet = todos.filter(todo => todo.isDone === false);

console.log("\n\tThings Done: \n")
thingsDone.forEach(items => {
    console.log(items.title);
});

console.log("\n\tThings not done yet: \n")
thingsNotDoneYet.forEach(items => {
    console.log(items.title);
});