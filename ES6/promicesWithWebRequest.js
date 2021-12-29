var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const testCall = (url) => {
   return new Promise((resolve, reject) => {
      // Make the request
      var request = new XMLHttpRequest();
      request.open("GET", url);
      // load the request
      request.onload = () => {
         if (request.status == 200) {
            resolve(request.response);
         } else {
            reject(Error(request.statusText));
         }
      };
      request.onerror = () => {
         reject(Error("Network Issues"));
      };
      request.send();
   });
};
testCall("https://randomuser.me/api/")
   .then((response) => {
      console.log("Hurray!!!");
      console.log(response);
   })
   .catch((error) => {
      console.log(error);
   });
