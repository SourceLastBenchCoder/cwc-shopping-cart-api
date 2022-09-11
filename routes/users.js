import express from 'express'
import {
    deleteUser,
    getAllUser,
    getUserById,
    updateUser
} from '../controller/user.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'


const router = express.Router()

//update
router.put("/:id", verifyUser, updateUser)

//Delete
router.delete("/:id", verifyUser, deleteUser)

//Get All
router.get("/", verifyAdmin, getAllUser)

//Get By Id
router.get("/:id", verifyUser, getUserById)


export default router