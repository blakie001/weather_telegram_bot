import User from "../models/user.model.js";

export const handleUnsubscribe = async(ctx) =>{
    const { id } = ctx.from;

    try {

        const isSubscribed = await User.findOneAndUpdate(
            { userId: id, subscribed: true},
            { subscribed: false },
            { new: true },
        )
        if(!isSubscribed) {
            return ctx.reply("You Were Not subscribed to Get Weather Update Bot.")
        }

        await ctx.reply(`You have been unsubscrubed from daily Weather Update
            Write /subscribe to restart Getting Weather Updates Daily`);

    } catch (error) {
        console.log("Error Unsubscribing User", error);
        await ctx.reply("Internal Server Error");
    }
}