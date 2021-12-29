class Uber{
    constructor(){
        this.msg = 'Welcome to Uber';
    }
    static sayHi(){
        console.log('I am a static function');
    }
}
class Driver{
    constructor(){
        this._name = '';
        this._exp = 0;
    }
    get myName(){
        return this._name;
    }
    get myExp(){
        return this._exp;
    }
    set myName(val){
        this._name = val;
    }
    set myExp(val){
        this._exp = val;
    }
}
var drive = new Driver();
drive.myName = 'Shashank';
drive.myExp = 5;

console.log('Name: '+drive.myName + '\nExperience: '+drive.myExp);
Uber.sayHi();
