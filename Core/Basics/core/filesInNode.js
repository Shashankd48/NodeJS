const fs = require("fs");

fs.writeFile("message.txt", "Hello There", (error) => {
   if (error) throw error;
   console.log("File has been written");
});

console.log("Event loop");

fs.readFile("./message.txt", "utf8", (err, data) => {
   if (err) throw err;
   console.log(data);
});
