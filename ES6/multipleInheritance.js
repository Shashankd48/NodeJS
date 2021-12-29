var mixin = require('mixin');
class Vehicle{
    vehicle(){
        console.log('Vehicle');
    }
}
class Bike{
    bike(){
        console.log('Bikes');
    }
}
try{
    class FZ extends mixin(Vehicle,Bike){
        status(){
            this.vehicle();
            this.bike();
            console.log('running');
        }
    }
    
    var fz = new FZ();
    fz.status();
}catch(e){
    console.log('\nError: mixin module is  not working. So that multiple inheritance.');
}
