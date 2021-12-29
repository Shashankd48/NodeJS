const student = {
   name: "John",
   age: 26,
   isActive: true,
};

// object to string to be stored in local storage
const studentObjToString = JSON.stringify(student);

console.log(typeof studentObjToString + " " + studentObjToString);
localStorage.setItem("student", studentObjToString);

// String to Object Json
var data = localStorage.getItem("student");
var stringToJson = JSON.parse(data);
console.log(typeof stringToJson);
console.log(
   "Name: " +
      stringToJson.name +
      "\nAge: " +
      stringToJson.age +
      "\nisActive: " +
      stringToJson.isActive
);

// console.log(JSON.parse(localStorage.getItem('student')).age);
