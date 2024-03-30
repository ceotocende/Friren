import { SlashCommandBuilder } from "discord.js";
import { client } from "../..";

export default new client.command({
    structure: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('reply ping'),
    run: async (client, interaction) => {
        interaction.reply('pong!');
        
    }
});