import cron from "node-cron";
import User from "../models/user.model.js";
import { fetchWeather } from "../services/fetchWeather.js";

export const sendDailyWeather = async (bot) =>{
    cron.schedule("0 12 * * *", async ()=>{
        console.log(`Daily Weather Updates Sending...`);

        try {
            const users = await User.find({ subscribed: true, blocked: false});
            
            for(const user of users) {
                const weather = await fetchWeather(user.location);
                const message = `Good Morning! Here's you Daily Weather Update for ${user.location} :
                -> Temp : ${weather.temp}
                -> Humidity : ${weather.humidity}%
                write /unsubscribe To Stop Receiving Weather Updates.`

                await bot.telegram.sendMessage(user.userId, message);
                console.log(`Sent Daily Update to ${user.firstName} ${user.lastName} of ${user.location}`);
            }

        } catch (error) {
            console.log("Error Sending Daily Updates to users", error);
        }

    })
}
