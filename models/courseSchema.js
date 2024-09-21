const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        reqiured: true
    },
    description: {
        type: String,
        reqiured: true
    },
    price: {
        type: Number,
        reqiured: true
    }
});

const Course = mongoose.model('Course', courseSchema)
module.exports = Course