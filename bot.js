'use strict';

// Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// MAIN
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('MacroBot is online');
});


var snark = ['']

client.on('message', message => {
    console.log(message.content);

    if (message.content === '!ping') {
        console.log('About to send message');
        message.channel.send('Greetings, human.');
    }

    if (message.content === '!hello') {
        message.channel.send('Hello, @' + message.author.username);
    }

    if (message.content === '!boop') {
        var steamyPhrases = [
        '*does a sexy dance for @' + message.author.username + "*", 
        '*looks at @' + message.author.username + ' with steamy bedroom eyes*',
        '*nuzzles into @' + message.author.username + ', sexily*',
        '*beckons @' + message.author.username + ' to bed*',
        '*runs up to @' + message.author.username + '\'s leg and nuzzles it*'
        ]

        var randomInt = getRandomInt(5)
        message.channel.send(steamyPhrases[randomInt]);
    }

    if (message.content === '!gender') {
        message.channel.send('I\'m a he goddammit');
    }

    if (message.content === '!crushmacrobot') {
        var sideEyes = [
            '*Grows to 50 feet and crushes @' + message.author.username + ' instead*',
            '*Glares at @' + message.author.username + '*',
            '*Gives @' + message.author.username + ' side eye while being slowly flattened*',
            '*Glares at @' + message.author.username + ' then is crushed underfoot and explodes in a pile of 1\'s and 0\'s*',
            '*Shreaks a tiny shreak before being crushed by @' + message.author.username + '*',
            '*Presses up with tiny hands on @' + message.author.username + '\'s foot and says \"No\"*',
        ]

        var randomInt = getRandomInt(6);
        message.channel.send(sideEyes[randomInt]);
    }

    if (message.content === '!holdmedaddy') {
        var protectivePhrases = [
            '*giants in and holds @' + message.author.username + ' tight*',
            '*grows massive and stands over @' + message.author.username + '*',
            '*reaches down and grabs @' + message.author.username + ' in a giant fist, carrying him around like a little toy*',
            '*grabs @' + message.author.username + ' and tosses him on my giant bot abs*',
            '*eyes @' + message.author.username + ' and walks over, planting two massive bot feet on either side of him*'
        ]

        var randomInt = getRandomInt(5);
        message.channel.send(protectivePhrases[randomInt]);
    }

    // Role assignment
    if (message.content === '!giant') {
        let role = message.guild.roles.cache.find(role => role.name === "Giant");
        message.member.roles.add(role);
        message.channel.send(message.author.toString() + ' has been assigned @Giant. All beware.');
    }

    if (message.content === '!versatile') {
        let role = message.guild.roles.cache.find(role => role.name === "Versatile");
        message.member.roles.add(role);
        message.channel.send(message.author.toString() + ' has been assigned to @Versatile. *computing whether to grow, shrink, or run*');
    }

    if (message.content === '!normal-sized') {
        let role = message.guild.roles.cache.find(role => role.name === "Normal-sized");
        message.member.roles.add(role);
        message.channel.send(message.author.toString() + ' has been assigned to @Normal-sized. Boop. *runs up and kicks his ankle before running for it*');
    }

    if (message.content === "!tiny") {
        let role = message.guild.roles.cache.find(role => role.name === "Tiny");
        message.member.roles.add(role);
        message.channel.send(message.author.toString() + ' has been assigned to @Tiny. Some big fella come find them. *hugs them then slowly backs away*');
    }

    if (message.content === "!test") {
        message.channel.send(message.author.toString())
    }

});

client.login(AUTH_TOKEN)
