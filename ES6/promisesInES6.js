// Example 1
const asynFun = () => {
   return new Promise((resolve, reject) => {
      resolve("result");
      reject(error);
   });
};

asynFun()
   .then((result) => {
      console.log(result);
   })
   .catch((error) => {
      console.log(error);
   });

// Example 2
let myP = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("Hurray!!!");
      //   reject("Rejected");
   }, 1000);
});

myP.then((v) => {
   console.log(v);
}).catch((err) => console.log(err));
