import { Interaction } from "discord.js";
import { client } from "../..";
import { addBalance } from "../../database/functions/addBalance";
import { addExp } from "../../database/functions/addExp";
import checkLvl from "../../database/functions/checkLvl";

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    console.log(message.content)
    //await checkLvl(message.interaction as Interaction);
    await addBalance(message.author.id, 1);
    await addExp(message.author.id, 1);
})