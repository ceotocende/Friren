import { Client, EmbedBuilder, Interaction, MessageInteraction, TextChannel } from "discord.js";
import { Users } from "../models/Users";
import chekUserInDataBase from "./chekUsersInDataBase";
import { channels, colors } from "../../utils/Settings";

export default async function checkLvl(interaction: Interaction | MessageInteraction) {
    const userDb = await Users.findOne({ where: { user_id: interaction.user.id } });
    let client: Client<true> | undefined;
    const channel = client!.channels.cache.get(`${channels.basketChannel}`) as TextChannel;

    if (!userDb) {
        chekUserInDataBase(interaction.user.id);
    } else {
        if (userDb.exp === ((userDb.rank + 1) * 245)) {
            userDb.rank += 1; 
            userDb.save();
            Users.sync();

            channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setAuthor({ name: `<@${interaction.user.id}>`, iconURL: `${interaction.user.avatarURL()}` })
                        .setDescription(`<@${interaction.user.id}>\nПоздравляю вы получили **${userDb.rank}**!`)
                        .setColor(`#${colors.stable}`)
                        .setThumbnail(interaction.user.avatarURL())
                        .setTimestamp()
                ]
            })            
        } 
    }
}