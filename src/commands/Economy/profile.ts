import { EmbedAssertions, EmbedBuilder, GuildMember, SlashCommandBuilder, User } from "discord.js";
import { client } from "../..";
import { Users } from "../../database/models/Users";
import { EmbedErrUserIsNotDatabase, embedErrFromInteractions } from "../../utils/EmbedsExamples";
import { colors } from "../../utils/Settings";

export default new client.command({
    structure: new SlashCommandBuilder()
        .setName('профиль')
        .setDescription('Посмотреть профиль участника или свой')
        .addUserOption(op => op
            .setName('user')
            .setDescription('Выберите участника')
            .setRequired(false)),
    run: async (client, interaction) => {
        const targetUser = interaction.options.getUser('user') || interaction.user as User;
        const member = await interaction.guild?.members.fetch(targetUser.id);
        const UserTimeJoin = member?.joinedTimestamp;
        const UserTimeCreate = targetUser.createdTimestamp;

        const UserDb = await Users.findOne({ where: { user_id: targetUser.id } });

        const userAvatar = interaction.user.avatarURL() || avatar.server;

        if (!UserDb) {
            interaction.reply({
                embeds: [EmbedErrUserIsNotDatabase]
            })
        } else if (targetUser.bot) {
            interaction.reply({
                embeds: [embedErrFromInteractions]
            })
        } else {
            const embed = new EmbedBuilder()
                .setAuthor({ name: `Профиль участника ${targetUser.username}`, iconURL: `${userAvatar}` })
                .setColor(`#${colors.stable}`)
                .setFields(
                    {
                        "name": "Основная информация",
                        "value": `**Имя пользователя:** ${targetUser.globalName}\n**Присоединился:** <t:${Math.floor(UserTimeJoin! / 1000)}> (<t:${Math.floor(UserTimeJoin! / 1000)}:R>)\n**Дата регистрации:** <t:${Math.floor(UserTimeCreate! / 1000)}> (<t:${Math.floor(UserTimeCreate! / 1000)}:R>)`
                    },
                    {
                        "name": "Рейтинг",
                        "value": "# -/-",
                        "inline": true
                    },
                    {
                        "name": "Уровень",
                        "value": "-",
                        "inline": true
                    },
                    {
                        "name": "Опыт",
                        "value": "-",
                        "inline": true
                    },
                    {
                        "name": "Голосовая активность",
                        "value": "-"
                    }
                )
                .setThumbnail(userAvatar)
                .setFooter({ text: `ID: ${targetUser.id}` })
   
                interaction.reply({
                    embeds: [embed]
                })
            }
    }
});