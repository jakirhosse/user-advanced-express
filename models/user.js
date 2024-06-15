import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    dateTime: { type: Date, required: true },
    email:{type:String,unique:true,required: true}
})

const user = mongoose.model("user", userSchema)
 export default user;