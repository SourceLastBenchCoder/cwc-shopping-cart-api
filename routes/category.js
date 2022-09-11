import express from 'express'
import {
    deleteCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    createCategory
} from '../controller/category.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'


const router = express.Router()

//Create
router.post("/", verifyAdmin, createCategory)

//update
router.put("/:id", verifyUser, updateCategory)

//Delete
router.delete("/:id", verifyUser, deleteCategory)

//Get All
router.get("/", verifyAdmin, getAllCategory)

//Get By Id
router.get("/:id", verifyUser, getCategoryById)


export default router