'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('MacroBot is online')
});


var snark = ['']

client.on('message', message => {
    console.log(message.content);

    if (message.content === '!ping') {
        console.log('About to send message')
        message.channel.send('Greetings, human.')
    }

    if (message.content === '!hello') {
        message.channel.send('Hello, @' + message.author.username)
    }
});


client.login(AUTH_TOKEN)