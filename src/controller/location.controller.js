import User from "../models/user.model.js";
import axios from "axios";
import { fetchWeather } from "../services/fetchWeather.js";

export const handleAddLocation = async (ctx) => {
    const location = ctx.text;
    const { id } = ctx.from;
    try {
        const isBlocked = await User.findOne({ userId: id });
        if (isBlocked.blocked) {
            return ctx.reply("You have Been Blocked By the Admin");
        }

        const weather = await fetchWeather(location);

        await ctx.reply(`Weather Today At ${location} 
            Temperature : ${weather.temp}
            
            Humidity : ${weather.humidity}%`);

        const user = await User.findOneAndUpdate(
            { userId: id },
            { location: location },
            { new: true, upsert: true }
        )
    } catch (error) {
        if (error.status === 404) {
            return ctx.reply("Invalid Location, Please Enter A Valid State or City");
        }

        console.log("Error Adding Location", error);
    }
}