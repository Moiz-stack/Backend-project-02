const express = require('express')
const router = express.Router()

const {

    displayCourses,
    addCourse,
    getCourse,
    updateCourse,
    deleteCourse

} = require('../controller/userController')

router.get('/displayCourses', displayCourses)

router.post('/addCourse', addCourse)

router.get('/getCourse/:id', getCourse)

router.put('/updateCourse/:id', updateCourse)

router.delete('/deleteCourse/:id', deleteCourse)

module.exports = router