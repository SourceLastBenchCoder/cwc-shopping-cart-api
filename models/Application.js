import mongoose from "mongoose";

const AppliCationSchema = new mongoose.Schema({
    appName: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model("Application", AppliCationSchema)