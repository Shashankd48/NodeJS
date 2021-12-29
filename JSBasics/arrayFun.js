const Marvel = ['Hulk','Thor','Captain America','Black Widow','Hawk Eye','Iron Man','Loki'];
console.log(Marvel);
const removed = ['Hey'];
// for(i = 0; i<3; i++){
//     removed[i] = Marvel.shift();
// }
// // console.log(Marvel);
// Marvel.unshift(removed);
// console.log("\n\n");
// console.log(Marvel);
// console.log(Marvel[1][4]);
Marvel.splice(Marvel.length-1,1,'Black Panther');
console.log(Marvel);