const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bodyparser = require('body-parser');

// set storage engine
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/profiles');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage : storage
})

app.post('/singleFile', upload.single('profilepic'), (req, res) => {
    res.json({
        File: req.file
    })
})

// Upload multiple files
app.post('/multipleFiles', upload.array('allFiles', 5), (req, res) => {
    res.send('All files uploaded');
})
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log('Server is running on localhost at port : '+port);
})