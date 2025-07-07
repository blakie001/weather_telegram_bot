import User from "../models/user.model.js"

export const handleStart = async (ctx) => {

    const { id, first_name, last_name, username } = ctx.from;

    try {
        const existingUser = await User.findOne({ userId: id });

        if (!existingUser) {
            const newUser = new User({
                userId: id,
                firstName: first_name,
                lastName: last_name,
                username: username,
            });
            await newUser.save();
        }
        if(existingUser.blocked) {
            return ctx.reply("You have Blocked by the Admin.");
        }
        
        await ctx.reply(`Hi ${first_name},
            Welcome To GET WEATHER UPDATE tg Bot. 

            -> Write state or city Name which you want to get weather Update

            -> write /subscribe to get daily weather updates
            -> /unsubscribe to Stop Receiving Weather Updates`);

    } catch (error) {
        console.log("Error in /start Command", error);
        await ctx.reply("Internal Server Error.")
    }
}