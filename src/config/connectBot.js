import { Telegraf } from "telegraf";
import { setupBot } from "../routes/bot.routes.js";
import { sendDailyWeather } from "../utils/cronJob.utils.js";

export const startApp = () =>{
    try {
        const bot = new Telegraf(process.env.BOT_FATHER_API_KEY);
    
        setupBot(bot);

        sendDailyWeather(bot);
    
        bot.catch((err) => {
            console.log("Error Connecting Bot", err);
        })
    
        bot.launch();
        console.log("Bot Started Successfully");
    
    } catch (error) {
        console.log("Failed to Start Bot", error);
    }
}