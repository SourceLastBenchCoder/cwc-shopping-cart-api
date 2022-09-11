import express from 'express'
import User from "../models/User.js"


//update
export const updateUser = async (req, res,next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

//Delete
export const deleteUser = async (req, res,next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id, { new: true })
        res.status(200).json(deletedUser)
    } catch (err) {
        next(err)
    }
}

//Get All
export const getAllUser = async (req, res,next) => {
    try {
        const savedUser = await User.find()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}

//Get By Id
export const getUserById = async (req, res, next) => {
    try {
        const savedUser = await User.findById(req.params.id)
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}