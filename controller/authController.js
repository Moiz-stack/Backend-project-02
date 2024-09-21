const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userSchema')

const signUp = async (req, res, next) => {
    try {
        const user = new userModel(req.body)
        const salt = 10
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        user.password = hashedPassword
        await user.save()
        res.status(200).json({
            message: 'User added successfully',
            user: user
        })

    }
    catch (error) {
        next(error)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).json({
                message: "User Does Not Exist",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect Email Password",
            });
        }

        const accessToken = jwt.sign({ email: user.email, id: user.id }, 'secret')
        return res.status(200).json({
            accessToken: accessToken,
            message: "Login Success",
        })
    }

    catch (error) {
        next(error);
    }
}

module.exports={
    signUp,
    login
}