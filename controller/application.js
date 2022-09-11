import express from 'express'
import Application from "../models/Application.js"

//Create
export const createApplication = async (req, res,next) => {
    const newApplication = new Application(req.body)
    try {
        const savedApplication = await newApplication.save()
        res.status(200).json(savedApplication)
    } catch (err) {
       next(err)
    }
}

//update
export const updateApplication = async (req, res,next) => {
    try {
        const updatedApplication = await Application.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedApplication)
    } catch (err) {
        next(err)
    }
}

//Delete
export const deleteApplication = async (req, res,next) => {
    try {
        const deletedApplication = await Application.findByIdAndDelete(req.params.id, { new: true })
        res.status(200).json(deletedApplication)
    } catch (err) {
        next(err)
    }
}

//Get All
export const getAllApplication = async (req, res,next) => {
    try {
        const savedApplication = await Application.find()
        res.status(200).json(savedApplication)
    } catch (err) {
        next(err)
    }
}

//Get By Id
export const getApplicationById = async (req, res, next) => {
    try {
        const savedApplication = await Application.findById(req.params.id)
        res.status(200).json(savedApplication)
    } catch (err) {
        next(err)
    }
}