const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
})
app.get('/about', (req, res) => {
    res.send('<h2>This is About page</h2>')
})

app.get('/login/:id', (req, res) => {
    res.status(200).send(req.params).json({
        message: "This is an json Object",
        isLogin: true
    })
})

app.delete('/logout', (req, res) => {
    console.dir(req.ip);
    res.json({
        message: "Message Deleted",
        isLogin: false
    })
})

app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params);
})

app.listen(5000, () => {
    console.log('Server is running at port: 5000...');
})