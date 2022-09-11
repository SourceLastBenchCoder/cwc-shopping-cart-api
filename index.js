import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoot from './routes/auth.js'
import usersRoot from './routes/users.js'
import applicationRoot from './routes/application.js'
import categoryRoot from './routes/category.js'

dotenv.config()

const app = express()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB Database")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected")
})

app.get("/", (req, res) => {
    res.json({ AppName: "CWC Hotel Manager", ApiStatus: "API Running successfully" })
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/auth", authRoot)
app.use("/api/users", usersRoot)
app.use("/api/application", applicationRoot)
app.use("/api/category", categoryRoot)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Error Occurred Something went wrog"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


const PORT = process.env.PORT || 8181

app.listen(PORT, () => {
    connect()
    console.log("Connected to backend server With PORT : " + PORT)
})