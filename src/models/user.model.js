import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: { type: String },
    subscribed: {
        type: Boolean,
        default: false,
    },
    subscribedOn: {
        type: Date,
    },
    location: {
        type: String,
    },
    blocked: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

export default User;