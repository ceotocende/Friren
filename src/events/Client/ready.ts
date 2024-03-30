import { ActivityType } from "discord.js";
import { client as Client } from "../..";

Client.once('ready', (client) => {
    console.log('Logged in as: ' + Client.user?.tag);

    Client.user?.setActivity('магию', { type: ActivityType.Listening });
    Client.user?.setStatus('idle')
});