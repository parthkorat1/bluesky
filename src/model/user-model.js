import mongoose from "mongoose";


const massegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: false,
    },
    phone: {
        type: String,
        required: [true, "Please provide a number"],
    },
    message: {
        type: String,
        required: [true, "Please provide a message"],
        
    },
    date: {
        type: Date,
        default: Date.now,
    },
   
   
   
})

const Client = mongoose.models.clients || mongoose.model("clients", massegeSchema);

export default Client;