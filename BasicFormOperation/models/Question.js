var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Question', QuestionSchema);