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
    if (message.content === '!ping') {
        console.log('About to send message');
        message.channel.send('Greetings, human.');
    }

    if (message.content === '!hello') {
        message.channel.send('Hello, ' + message.author.toString());
    }

    if (message.content === '!boop') {
        var steamyPhrases = [
        '*does a sexy dance for ' + message.author.toString() + "*", 
        '*looks at ' + message.author.toString() + ' with steamy bedroom eyes*',
        '*nuzzles into ' + message.author.toString() + ', sexily*',
        '*beckons ' + message.author.toString() + ' to bed*',
        '*runs up to ' + message.author.toString() + '\'s leg and nuzzles it*'
        ]

        var randomInt = getRandomInt(5)
        message.channel.send(steamyPhrases[randomInt]);
    }

    if (message.content === '!gender') {
        message.channel.send('I\'m a he goddammit');
    }

    if (message.content === '!crushmacrobot') {
        var sideEyes = [
            //'*Grows to 50 feet and crushes @' + message.author.username + ' instead*',
            //'*Glares at @' + message.author.username + '*',
            // '*Gives @' + message.author.username + ' side eye while being slowly flattened*',
            //'*Glares at @' + message.author.username + ' then is crushed underfoot and explodes in a pile of 1\'s and 0\'s*',
            '*Shreaks a tiny shreak before being crushed by ' + message.author.toString() + '*',
            //'*Presses up with tiny hands on @' + message.author.username + '\'s foot and says \"No\"*',
        ]

        var randomInt = getRandomInt(6);
        message.channel.send(sideEyes[0]);
    }

    if (message.content === '!holdmedaddy') {
        var protectivePhrases = [
            '*giants in and holds ' + message.author.toString() + ' tight*',
            '*grows massive and stands over ' + message.author.toString() + ' protectively*',
            '*reaches down and grabs ' + message.author.toString() + ' in a giant fist carrying him around like a little toy*',
            '*kicks back and grabs @' + message.author.toString() + ', tossing him on some giant bot abs*',
            '*looks down like a dad at @' + message.author.toString() + ' and walks over, crossing arms and planting two massive bot feet on either side of him*'
        ]

        var randomInt = getRandomInt(5);
        message.channel.send(protectivePhrases[randomInt]);
    }

    if (message.content === '!haveadrinkbuddy') {
        message.channel.send('*hiccups and stumbles over, nuzzling against ' + message.author.toString() + '\'s leg*');
    }

    if (message.content === '!ping-general' && message.author.username === 'Argus') {
        message.channel.send('*cracks knuckles* 15 minutes to show time');
    }

    if (message.content === '!kickoff' && message.author.username === 'Argus') {
        message.channel.send('The servers first RP night has begun! EEP. *RUNS FOR THE HILLS*');
        message.channel.send(':tada:');
    }

    // Role assignment
    if (message.content === '!giant' || message.content === '!versatile' || message.content === '!normal-sized' || message.content === "!tiny" || message.content === '!xgiant' || message.content === '!xversatile' || message.content === '!xnormal-sized' || message.content === "!xtiny") {
        
        // If role assignment message sent in #roles
        if (message.channel.id === '742850391103766689') {

            if (message.content === '!giant') {
                let role = message.guild.roles.cache.find(role => role.name === "Giant");
                message.member.roles.add(role);
                message.channel.send(message.author.toString() + ' has been assigned <@&751832037253709888>. All beware.');
            }

            if (message.content === '!versatile') {
                let role = message.guild.roles.cache.find(role => role.name === "Versatile");
                message.member.roles.add(role);
                message.channel.send(message.author.toString() + ' has been assigned to <@&751832041078915153>. *computes whether to grow, shrink, or run*');
            }

            if (message.content === '!normal-sized') {
                let role = message.guild.roles.cache.find(role => role.name === "Normal-sized");
                message.member.roles.add(role);
                message.channel.send(message.author.toString() + ' has been assigned to <@&751832266304520202>. Boop. *runs up and kicks his ankle before running for it*');
            }

            if (message.content === "!tiny") {
                let role = message.guild.roles.cache.find(role => role.name === "Tiny");
                message.member.roles.add(role);
                message.channel.send(message.author.toString() + ' has been assigned to <@&751832268875628566>. Some big fella come find them.');
            }

            if (message.content === '!xgiant') {
                let role = message.guild.roles.cache.find(role => role.name === "Giant");
                message.member.roles.remove(role);
                message.channel.send(message.author.toString() + ' has been unassigned @Giant.');
            }

            if (message.content === '!xversatile') {
                let role = message.guild.roles.cache.find(role => role.name === "Versatile");
                message.member.roles.remove(role);
                message.channel.send(message.author.toString() + ' has been unassigned @Versatile.');
            }

            if (message.content === '!xnormal-sized') {
                let role = message.guild.roles.cache.find(role => role.name === "Normal-sized");
                message.member.roles.remove(role);
                message.channel.send(message.author.toString() + ' has been unassigned @Normal-sized.');
            }

            if (message.content === "!xtiny") {
                let role = message.guild.roles.cache.find(role => role.name === "Tiny");
                message.member.roles.remove(role);
                message.channel.send(message.author.toString() + ' has been unassigned @Tiny.');
            }
        } 

        // If role assignment message sent anywhere else
        else {
            message.channel.send("Roles are only assignable in " + message.guild.channels.cache.get('742850391103766689').toString() + ".")
        }
    }

    if (message.content === "!test") {
        message.channel.send(message.author.toString())
    }

});

client.login(AUTH_TOKEN)
