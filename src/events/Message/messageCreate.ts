import { client } from "../..";
import { addBalance } from "../../database/functions/addBalance";
import { addExp } from "../../database/functions/addExp";
import chekUserInDataBase from "../../database/functions/chekUsersInDataBase";

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    console.log(message.content)
    
    await addBalance(message.author.id, 1);
    await addExp(message.author.id, 1);
})