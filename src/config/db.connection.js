import mongoose from "mongoose";

export const connectDb = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
}
