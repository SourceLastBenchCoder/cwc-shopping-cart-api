import express from 'express'
import Category from "../models/Category.js"

//Create
export const createCategory = async (req, res,next) => {
    const newCategory = new Category(req.body)
    try {
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    } catch (err) {
       next(err)
    }
}

//update
export const updateCategory = async (req, res,next) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedCategory)
    } catch (err) {
        next(err)
    }
}

//Delete
export const deleteCategory = async (req, res,next) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id, { new: true })
        res.status(200).json(deletedCategory)
    } catch (err) {
        next(err)
    }
}

//Get All
export const getAllCategory = async (req, res,next) => {
    try {
        const savedCategory = await Category.find()
        res.status(200).json(savedCategory)
    } catch (err) {
        next(err)
    }
}

//Get By Id
export const getCategoryById = async (req, res, next) => {
    try {
        const savedCategory = await Category.findById(req.params.id)
        res.status(200).json(savedCategory)
    } catch (err) {
        next(err)
    }
}