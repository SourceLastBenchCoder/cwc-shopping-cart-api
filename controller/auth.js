import bcrypt from "bcrypt"
import User from "../models/User.js";
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        country: req.body.country,
        city: req.body.city,
        phone: req.body.phone,
        password: hash,
        isAdmin: req.body.isAdmin
    })
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user)
            return next(createError(404, `No User found! ${req.body.email} not found in the database`))

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if (!isPasswordCorrect)
            return next(createError(404, `Password wrong for EmailId ! ${req.body.email}`))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY_JWT)

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(user)
    } catch (err) {
        next(err)
    }
}