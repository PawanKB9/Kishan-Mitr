import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    shopName: { type: String },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    profilePic: { type: String, default: "" }, // cloudinary url of the image
    location: { type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point'
    },
    coordinates: { type: [Number] },  // [lng, lat]
    address: { type: String, default: '' },
    pincode:{ type: Number },
    eLoc: {type : String },
 },
}, { timestamps: true });

const users = mongoose.model("user", userSchema);
export { users };