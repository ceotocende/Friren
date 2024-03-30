import { ButtonBuilder, ButtonInteraction } from "discord.js";
import { client } from "../..";
import checkLvl from "../../database/functions/checkLvl";

client.on('interactionCreate', async (interaction) => {
    if (!interaction.inGuild()) return;

    if (interaction.isChatInputCommand()) {

        const command = client.commands.get(interaction.commandName);

        if (!command) return;
        
        await checkLvl(interaction);

        try {
            command?.run(client, interaction);
        } catch (err) {
            console.error(err);
            interaction.reply({ ephemeral: true, content: "Произошла ошибка при выполнение команды" })
        }; 
    }
});