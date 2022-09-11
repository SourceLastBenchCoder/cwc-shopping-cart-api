import mongoose from "mongoose";

const AppliCationSchema = new mongoose.Schema({
    appName: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    favicon: {
        type: String
    },
    metaTag: {
        type: String
    },
    metaDescription: {
        type: String
    },
    isActive: {
        type: Boolean,
        required: true
    }
}, { timeseries: true })

export default mongoose.model("Application", AppliCationSchema)