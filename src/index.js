require('dotenv').config();

// Client = Bot
const { Client, IntentsBitField } = require("discord.js");

// Intents are like a set of permissions that the bot can use to get access to a set of events.
const client = new Client({
  intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✔️ ${c.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'hey') {
        interaction.reply('Hey there!')
    }
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'hello') {
        message.reply('Hey!');
    }
});

client.login(process.env.TOKEN)