const courseModel = require('../models/courseSchema')



const displayCourses = async (req, res, next) => {
    try {
        const courses = await courseModel.find()
        res.status(200).json({
            message: 'Courses fetched successfully',
            courses: courses
        })
    }
    catch (error) {
        next(error)
    }
}


const addCourse = async (req, res, next) => {
    try {
        const course = new courseModel(req.body)
        await course.save()
        res.status(200).json({
            message: 'Course added successfully',
            course: course
        })
    }
    catch (error) {
        next(error)
    }
}


const getCourse = async (req, res, next) => {
    try {
        const course = await courseModel.findById(req.params.id)
        res.status(200).json({
            message: 'Course fetched successfully',
            course: course
        })
    }
    catch (error) {
        next(error)
    }
}

const updateCourse = async (req, res, next) => {
    try {
        const course = await courseModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: 'Course updated successfully',
            course: course
        })
    }
    catch (error) {
        next(error)
    }
}

const deleteCourse = async (req, res, next) => {
    try {
        const course = await courseModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: 'Course deleted successfully',
            course: course
        })
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    displayCourses,
    addCourse,
    getCourse,
    updateCourse,
    deleteCourse
}