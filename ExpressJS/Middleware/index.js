const express = require("express");
const app = express();
const port = 5000;
const bodyparser = require("body-parser");

// learning middleware

// Using Body-parser
// var myConsoleLog = (req, res, next) => {
//     console.log('I am a middleware One');
//     next()
// }
// using middleware directlly here
app.use(bodyparser.urlencoded({ extended: false }));

// servering static file
app.use("/login", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
   //    res.send("You Are logged in");
   res.sendFile("/public/home.html");
});

app.post("/login", (req, res) => {
   console.log(req.body.email);
   console.log(req.body.password);
   // DO some DB processing
   res.redirect("/");
});

app.listen(port, () =>
   console.log(`Server is running on localhost at port ${port}`)
);
