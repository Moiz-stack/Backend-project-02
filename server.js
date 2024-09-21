const express = require('express')
const mongoose = require('mongoose')
const courseSchema = require('./models/courseSchema');
const userSchema = require('./models/userSchema');

const courseRouter = require('./routes/userRouter')

const userRouter = require('./routes/courseRouter')

const authRouter = require('./routes/authRouter')


const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Course')

app.use((err, req, res, next) => {
    res.status(404).json({
        message: 'An error occured!',
        error: err.message
    })
})

app.use('/course', courseRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})