import { handleAddLocation } from "../controller/location.controller.js";
import { handleStart } from "../controller/start.controller.js";
import { handleSubscribe } from "../controller/subscribe.controller.js";
import { handleUnsubscribe } from "../controller/unsubscibe.controller.js";

export const setupBot = (bot) =>{
    bot.start(handleStart);
    bot.command("subscribe", handleSubscribe);
    bot.command("unsubscribe", handleUnsubscribe);

    bot.on("text", handleAddLocation);
}