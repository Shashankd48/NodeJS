class University{
    constructor(){
        this.name = 'IGNOU';
    }
    printName(){
        console.log('University: '+this.name);
    }
}
class Student extends University{
    constructor(sname,course){
        super();
        this.sname = sname;
        this.course = course;
    }
    displayInfo(){
        console.log('Name: '+this.sname+ '\nCourse: '+this.course);
    }
    static hello(){
        console.log('hello student');
        return 'static method';
    }
}

const john = new Student('Shashank','BCA');
john.displayInfo();
john.printName();
// We can not call static method by class object
// john.hello();      #error

// calling static method by the class
// Student.hello();