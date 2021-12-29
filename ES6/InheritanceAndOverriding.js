class Car{
    constructor(){
        this.carName = 'BMW';
    }
    display(){
        console.log(this.carName);
    }
}
class BMW extends Car{
    constructor(){
        super();
        this.modelName = 'X8';
    }
    display(){
        super.display();
        console.log('Car: '+this.carName+' ' +this.modelName);
    }

    // method overloading is not allow. It does not overload the functions
    // test(name){
    //     console.log('hello'+name);
    // }
    // test(name,me){
    //     console.log('hi'+name+me);
    // }
}
var x8 = new BMW();
x8.display();
x8.test('x8');