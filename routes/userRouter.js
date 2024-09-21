const express = require('express')
const router = express.Router()

const {
    addUser,
    getUsers,
    getUserWithId,
    updateUserWithId,
    deleteUserWithId} = require('../controller/userController')

//add user

router.post('/add', addUser)

//get all users

router.get('/getUsers', getUsers)



//get user with id

router.get('/getUserwithID/:id', getUserWithId)

//update user with id

router.put('/updateUser/:id', updateUserWithId)

//delete user with id

router.delete('/deleteUser/:id', deleteUserWithId)



module.exports = router