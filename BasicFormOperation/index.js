require('dotenv').config();
const exprees = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = exprees();

// My Schema
const Question = require('./models/Question');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Attemp to connect to the database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB CONNECTED SUCCESSFULLY');
}).catch(err => console.log('Failed to connect to DB->basic'))

app.get('/', (req, res) => {
    res.render('index');
})

// Entry to the database
app.post('/welcome', (req, res) => {
    var data = req.body
    const question = new Question(data);
    question.save((err, question) => {
        if(err){
            return res.status(400).json({
                err: 'Not able to save question in DB'
            })
        }
        console.log(data);
        res.render('welcome', {data: data});
    })
})

app.get('/allQuestion', (req, res) => {
    Question.find().exec((err, questions) => {
        if(err){
            return res.status(400).json({
                err: "No question found",
            })
        }
        res.render('allQuestion', {questions: questions});
    })
    // res.render('allQuestion');
})

app.get('/deleteQuestion', (req, res) => {
    res.render('deleteQuestion');
})

app.post('/deleteOne', (req, res) => {
    const question = req.body;
    Question.deleteOne(question, (err, question) => {
        if(err){
            return res.status(400).json({
                err: 'Failed to delete the question'
            });
        }
        res.json({
            message: `${question} deleted successfully`
        })
    })
})
app.get('/deleteAll', (req, res) => {
    const question = req.body;
    // Question.deleteMany(question, (err, question) => {
    //     if(err){
    //         return res.status(400).json({
    //             err: 'Failed to delete Question'
    //         })
    //     }
    //     res.json({
    //         message: `All questions are deleted successfully that matched ${question}`
    //     })
    // })
    Question.remove(question).exec((err, question) =>{
        if(err){
            return res.status(400).json({
                err: 'Failed to delete Question'
            })
        }
        res.json({
            message: `All questions are deleted successfully that matched ${question}`
        })
    })
})
app.listen(port, () => console.log(`Server is running on localhost at port ${port}`));