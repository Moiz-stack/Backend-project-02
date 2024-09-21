const userModel = require('../models/userSchema')
const bcrypt = require('bcrypt')


const addUser = async (req, res, next) => {
    try {
        const user = new userModel(req.body);
        const salt = 10;
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        user.password = hashPassword
        await user.save();

        res.status(200).json({
            message: 'User added successfully',
            user: user
        })
    }
    catch (error) {
        next(error)
    }
}

const getUsers = async (req, res, next) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            message: 'Users fetched successfully',
            users: users
        })
    }
    catch (error) {
        next(error)
    }
}

const getUserWithId = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.status(200).json({
            message: 'User fetched successfully',
            user: user
        })
    }
    catch (error) {
        next(error)
    }
}

const updateUserWithId = async (req, res, next) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message: 'User updated successfully',
            user: user
        })
    }
    catch (error) {
        next(error)
    }
}

const deleteUserWithId = async (req, res, next) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'User deleted successfully',
            user: user
        })
    }
    catch (error) {
        next(error)
    }
}

module.exports={
    addUser,
    getUsers,
    getUserWithId,
    updateUserWithId,
    deleteUserWithId
}