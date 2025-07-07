import User from "../models/user.model.js"

export const handleSubscribe = async(ctx) =>{

    const { id } = ctx.from;

    try {
        const user = await User.findOne({ userId: id });
        if(user.blocked) {
            return ctx.reply("You have been Blocked By the Admin.");
        }

        // if(user.subscribed === true) {
        //     return ctx.reply("You have Already Suubscibed.");
        // }

        if(!user.location) {
            return ctx.reply("Please Add a City First using /location [city]");
        }

        await User.findOneAndUpdate(
            { userId: id },
            { subscribed: true, subscribedOn: new Date() },
            { new: true },
        )

        await ctx.reply(`You have Succesfully subscribed to Get Daily Weather Update !!
            Location : ${user.location}
            You will receive daily Weather Updates for this Location.
            To change the location, Just Write the Name of the City/State.
            Use /unsubscribe to Stop Receiving Daily Weather Update`);

    } catch (error) {
        console.log("Error IN /subscribe Command", error);
        await ctx.reply("Intenal Server Error");
    }
}