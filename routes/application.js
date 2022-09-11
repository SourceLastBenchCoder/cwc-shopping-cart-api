import express from 'express'
import {
    deleteApplication,
    getAllApplication,
    getApplicationById,
    updateApplication,
    createApplication
} from '../controller/application.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'


const router = express.Router()

//Create
router.post("/", verifyAdmin, createApplication)

//update
router.put("/:id", verifyUser, updateApplication)

//Delete
router.delete("/:id", verifyUser, deleteApplication)

//Get All
router.get("/", verifyAdmin, getAllApplication)

//Get By Id
router.get("/:id", verifyUser, getApplicationById)


export default router