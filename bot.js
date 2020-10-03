'use strict';


// CONSTANTS
const ARGUS_TAG = "Argus#1699";
const CH_THEFLAGPOLE_ID = "756882066326683678";
const CH_TEST_ID = "750829640133902457";

const FLAGPOLE_ON = true;

// Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// MAIN
const Discord = require('discord.js');
const Keyv = require('keyv');
const db = new Keyv('sqlite://testDB.db');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('MacroBot is online');
});

client.on('message', message => {
    
    let guild = client.guilds.cache.get('742827863270621244');
    let member = guild.member(message.member);

    var memberIsAvailable = true;
    if (member == null) {
        memberIsAvailable = false;
        message.channel.send("Unable to access guild. Please try again.");
    }

    if (memberIsAvailable) {

        // If user is not chained, allow them to do commands
        if (!member.roles.cache.find(role => role.id === '757103926913925202') || message.author.tag === ARGUS_TAG) {

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
                    '*Grows to 50 feet and crushes ' + message.author.toString() + ' instead*',
                    '*Glares at ' + message.author.toString() + '*',
                    //'*Glares at ' + message.author.toString() + ' then is crushed underfoot and explodes in a pile of 1\'s and 0\'s*',
                    '*Shreaks a tiny shreak before being crushed by ' + message.author.toString() + '*',
                    //'*Presses up with tiny hands on @' + message.author.username + '\'s foot and says \"No\"*',
                ]



                var randomInt = getRandomInt(6);
                message.channel.send('*Glares at ' + message.author.toString() + ' then is crushed underfoot and explodes in a pile of 1\'s and 0\'s*');
            }

            if (message.content === '!voremacrobot') {
                message.channel.send('*is picked up by ' + message.author.toString() + ' and dangled over his open mouth, violently struggling and resisting, before being dropped in and helplessly swallowed whole*');
            }

            if (message.content === '!holdmedaddy') {
                var protectivePhrases = [
                    '*giants in and holds ' + message.author.toString() + ' tight*',
                    '*grows massive and stands over ' + message.author.toString() + ' protectively*',
                    '*reaches down and grabs ' + message.author.toString() + ' in a giant fist carrying him around like a little toy*',
                    '*kicks back and grabs ' + message.author.toString() + ', tossing him on some giant abs*',
                    '*looks down like a dad at ' + message.author.toString() + ' and walks over, crossing arms and planting two large feet on either side of him*'
                ]

                var randomInt = getRandomInt(5);
                message.channel.send('*reaches down and grabs ' + message.author.toString() + ' in a giant fist carrying him around like a little toy*');
            }

            if (message.content === '!haveadrinkbuddy') {
                message.channel.send('*hiccups and stumbles over, nuzzling against ' + message.author.toString() + '\'s leg*');
            }

            if (message.content === '!ping-general' && message.author.username === 'Argus') {
                message.channel.send('*cracks knuckles* 15 minutes to show time');
            }

            if (message.content === '!kickoff' && message.author.tag === ARGUS_TAG) {
                message.channel.send('RP night has begun!');
                message.channel.send(':tada:');
            }











            // Role assignment
            var assignmentCommands = ['!giant', '!versatile', '!normal-sized', '!tiny', '!xgiant', '!xversatile', '!xnormal-sized', '!xtiny'];
            if (assignmentCommands.includes(message.content) && (message.guild && message.guild.available)) {
                
                // If role assignment message sent in #roles
                if (message.channel.id === '742850391103766689' || message.channel.id === '750829640133902457') {

                    if (message.content === '!giant') {
                        let role = message.guild.roles.cache.find(role => role.id === "742850157577764964");
                        member.roles.add(role);
                        message.channel.send(message.author.toString() + ' has been assigned <@&751832037253709888>. All beware.');
                    }

                    if (message.content === '!versatile') {
                        let role = message.guild.roles.cache.find(role => role.id === "742850207326273638");
                        member.roles.add(role);
                        message.channel.send(message.author.toString() + ' has been assigned to <@&751832041078915153>. *computes whether to grow, shrink, or run*');
                    }

                    if (message.content === '!normal-sized') {
                        let role = message.guild.roles.cache.find(role => role.id === "742850231950901319");
                        member.roles.add(role);
                        message.channel.send(message.author.toString() + ' has been assigned to <@&751832266304520202>. Boop. *runs up and kicks his ankle before running for it*');
                    }

                    if (message.content === "!tiny") {
                        let role = message.guild.roles.cache.find(role => role.id === "742850183649558529");
                        member.roles.add(role);
                        message.channel.send(message.author.toString() + ' has been assigned to <@&751832268875628566>. Some big fella come find them.');
                    }

                    if (message.content === '!xgiant') {
                        let role = message.guild.roles.cache.find(role => role.id === "742850157577764964");
                        member.roles.remove(role);
                        message.channel.send(message.author.toString() + ' has been unassigned Giant.');
                    }

                    if (message.content === '!xversatile') {
                        let role = message.guild.roles.cache.find(role => role.id === "742850207326273638");
                        member.roles.remove(role);
                        message.channel.send(message.author.toString() + ' has been unassigned Versatile.');
                    }

                    if (message.content === '!xnormal-sized') {
                        let role = message.guild.roles.cache.find(role => role.id === "742850231950901319");
                        member.roles.remove(role);
                        message.channel.send(message.author.toString() + ' has been unassigned Normal-sized.');
                    }

                    if (message.content === "!xtiny") {
                        let role = message.guild.roles.cache.find(role => role.id === "742850183649558529");
                        member.roles.remove(role);
                        message.channel.send(message.author.toString() + ' has been unassigned Tiny.');
                    }
                } 

                // If role assignment message sent anywhere else
                else {
                    message.channel.send("Roles are only assignable in " + message.guild.channels.cache.get('742850391103766689').toString() + ".")
                }
            }





            // Testing
            if (message.content === "!test" && message.author.tag == ARGUS_TAG) {
                message.channel.send("Test");
                
            }

            if (message.content === "!clear" && message.author.tag == ARGUS_TAG) {
                (async () => {
                    db.clear();
                    message.channel.send("Keyv Database cleared");
                })();
            }


            




            // THE FLAGPOLE
            if (message.content.startsWith("!chain")) {
                if (FLAGPOLE_ON) {

                    // Get ID and member object of user being saved
                    let split = message.content.split(" ");
                    let userIdRaw = split[1];
                    console.log("userIdRaw: " + userIdRaw);
                    var userId;
                    if (userIdRaw.startsWith("<@!")) {
                        userId = userIdRaw.substring(3, userIdRaw.length-1);    
                    } else {
                        userId = userIdRaw.substring(2, userIdRaw.length-1);
                    }
                    
                    let user = client.users.cache.find(u => u.id === userId);
                    let member = guild.member(user);

                    // Check if user has already chained the target user this week
                    var canVote = true;
                    
                    if (message.author.tag != ARGUS_TAG) {
                        let chainArrayKey = "chain-" + message.author.id;
                        (async () => {
                            var chainArray = await db.get(chainArrayKey);
                            if (chainArray == null) {
                                chainArray = [userId];
                            } else {
                                if (chainArray.includes(userId)) {
                                    canVote = false;
                                } else {
                                    chainArray.push(userId);
                                }
                            }
                            db.set(chainArrayKey, chainArray);
                        })();
                    }
                    

                    // Attempt vote
                    if (canVote) {
                        const One_Third_ID = "757440710415876158";
                        const Two_Thirds_ID = "757352612898144267";
                        const Full_ID = "757103926913925202";
                        const Checkedin_ID = "754901494876209305";
                        const Checkedin_chained_ID = "758359189839675423";

                        let oneThirdRole = guild.roles.cache.find(role => role.id === One_Third_ID);
                        let twoThirdsRole = guild.roles.cache.find(role => role.id === Two_Thirds_ID);
                        let chainedRole = guild.roles.cache.find(role => role.id === Full_ID);
                        let checkedInRole = guild.roles.cache.find(role => role.id === Checkedin_ID);
                        let checkedInChainedRole = guild.roles.cache.find(role => role.id === Checkedin_chained_ID);
     
                        let MacrobotChainedMessageLocal = "*Grabs " + userIdRaw + " by the leg and drags him out to the <#756882066326683678> to be <@&758450495991447593>.*"
                        let MacrobotChainedMessageFlagpole = "**Waltzes in dragging " + userIdRaw + " by the leg and straps him to The Flagpole. " + userIdRaw + " has been <@&758450495991447593>.**"

                        let DewitGifLink = "https://tenor.com/view/dewit-do-it-emperor-palpatine-star-wars-count-dooku-gif-15162627"; // Courtesy of *Tyxeny*

                        // When Argus votes
                        if (message.author.tag === ARGUS_TAG) {
                            member.roles.remove(oneThirdRole);
                            member.roles.remove(twoThirdsRole);
                            member.roles.remove(checkedInRole);
                            member.roles.add(chainedRole);
                            member.roles.add(checkedInChainedRole);
                            message.channel.send(message.author.toString() + " has voted to <@&758146418170265643> " + userIdRaw + ".");
                            message.channel.send(DewitGifLink);
                            message.channel.send(MacrobotChainedMessageLocal);
                            client.channels.cache.get(CH_THEFLAGPOLE_ID).send(MacrobotChainedMessageFlagpole);
                        }

                        // 2 / 3
                        else if (member.roles.cache.find(role => role.id === One_Third_ID)) {
                            let removeRole = guild.roles.cache.find(role => role.id === One_Third_ID);
                            member.roles.remove(removeRole);
                            let addRole = guild.roles.cache.find(role => role.id === Two_Thirds_ID);
                            member.roles.add(addRole);
                            message.channel.send(message.author.toString() + ' has voted to <@&758146418170265643> ' + userIdRaw + '. 2 of 3.');
                            message.channel.send(DewitGifLink);
                        } 

                        // 3 / 3
                        else if (member.roles.cache.find(r => r.id === Two_Thirds_ID)) {
                            let removeRole = guild.roles.cache.find(role => role.id === Two_Thirds_ID);
                            let addRole = guild.roles.cache.find(role => role.id === Full_ID);
                            member.roles.remove(removeRole);
                            member.roles.add(addRole);

                            let checkedInRemove = guild.roles.cache.find(role => role.id === Checkedin_ID);
                            let checkedInAdd = guild.roles.cache.find(role => role.id === Checkedin_chained_ID);
                            member.roles.remove(checkedInRemove);
                            member.roles.add(checkedInAdd);

                            message.channel.send(message.author.toString() + ' has voted to <@&758146418170265643> ' + userIdRaw + '. 3 of 3.');
                            message.channel.send(DewitGifLink);
                            message.channel.send(MacrobotChainedMessageLocal);
                            client.channels.cache.get(CH_THEFLAGPOLE_ID).send(MacrobotChainedMessageFlagpole);
                            client.channels.cache.get(CH_THEFLAGPOLE_ID).send(message.author.toString() + " cast the final vote.");

                        } 

                        // 1 / 3
                        else {
                            let role = guild.roles.cache.find(role => role.id === One_Third_ID);
                            member.roles.add(role);
                            message.channel.send(message.author.toString() + ' has voted to <@&758146418170265643> ' + userIdRaw + '. 1 of 3.');
                            message.channel.send(DewitGifLink);
                        }
                        
                        /*
                        if (user.roles.cfind(r => r.name === "Versatile")) {
                            console.log("Success");
                        } else {
                            console.log("Failure");
                        }
                        */
                    } 

                    // Can't vote for this user
                    else {
                        message.channel.send("You can only vote to !chain a given user once per week.");
                    }


                } else {
                    message.channel.send("*Beep bop.* The Flagpole is currently inactive.");
                }
            }

            if (message.content.startsWith("!save")) {
                if (FLAGPOLE_ON) {
                    if (message.channel.id === CH_THEFLAGPOLE_ID) {
                    
                        // Get ID and member object of user being saved
                        let split = message.content.split(" ");
                        let userIdRaw = split[1].trim();
                        var userId;
                        console.log("userIdRaw: " + userIdRaw);
                        if (userIdRaw.startsWith("<@!")) {
                            userId = userIdRaw.substring(3, userIdRaw.length-1);    
                        } else {
                            userId = userIdRaw.substring(2, userIdRaw.length-1);
                        }
                        let user = client.users.cache.find(u => u.id === userId);
                        let member = guild.member(user);

                        // Check if user has already saved the target user within 24 hours
                        var canVote = true;
                        if (message.author.tag != ARGUS_TAG) {
                            let saveArrayKey = "save-" + message.author.id;
                            
                            (async () => {
                                var saveArray = await db.get(saveArrayKey);
                                if (saveArray == null) {
                                    saveArray = [userId];
                                } else {
                                    if (saveArray.includes(userId)) {
                                        canVote = false;
                                    } else {
                                        saveArray.push(userId);
                                    }
                                }
                                db.set(saveArrayKey, saveArray);
                            })();

                        }

                        if (canVote) {

                            const Half_ID = "758449166220263435";
                            const Checkedin_ID = "754901494876209305";
                            const Checkedin_chained_ID = "758359189839675423";
                            const Chained_ID = "757103926913925202";

                            let halfIDRole = guild.roles.cache.find(role => role.id === Half_ID);
                            let chainedRole = guild.roles.cache.find(role => role.id === Chained_ID);
                            let checkedInRole = guild.roles.cache.find(role => role.id === Checkedin_ID);
                            let checkedInChainedRole = guild.roles.cache.find(role => role.id === Checkedin_chained_ID);

                            let MacrobotSavedMessage = "**Comes in with chain cutters and clips " + userIdRaw + "'s chains.** He is free to go. **Salutes and walks off.**";

                            // Check if targeted user is chained
                            if (member.roles.cache.find(r => r.id === Chained_ID)) {

                                // If targeted user is chained, cast vote

                                // Mod vote
                                if (message.author.tag === ARGUS_TAG) {
                                    member.roles.remove(halfIDRole);
                                    member.roles.remove(chainedRole);
                                    member.roles.remove(checkedInChainedRole);
                                    member.roles.add(checkedInRole);
                                    message.channel.send(message.author.toString() + " has voted to save " + userIdRaw + ".");
                                    message.channel.send(MacrobotSavedMessage);
                                }

                                // Free them
                                else if (member.roles.cache.find(r => r.id === Half_ID)) {
                                    let checkedInRemove = guild.roles.cache.find(role => role.id === Checkedin_chained_ID);
                                    let checkedInAdd = guild.roles.cache.find(role => role.id === Checkedin_ID);
                                    member.roles.remove(checkedInRemove);
                                    member.roles.add(checkedInAdd);

                                    member.roles.remove(chainedRole);
                                    member.roles.remove(halfIDRole);

                                    message.channel.send(message.author.toString() + ' has voted to save ' + userIdRaw + '. 2 of 2.');
                                    message.channel.send(MacrobotSavedMessage);
                                } 

                                // Vote 1 / 2
                                else {
                                    let addRole = guild.roles.cache.find(role => role.id === Half_ID);
                                    member.roles.add(addRole);

                                    message.channel.send(message.author.toString() + ' has voted to save ' + userIdRaw + '. 1 of 2.');;
                                } 
                            } 

                            // Target user is not chained. Send default message.
                            else {
                                message.channel.send("This user isn't currently chained.");
                            }
                        }
                    } 

                    else {
                        message.channel.send("The !save command can only be used in <#756882066326683678>.")
                    }
                    

                } else {
                    message.channel.send("*Beep bop.* The Flagpole is currently inactive.");  
                }
            } 
        } else {
            if (message.content.startsWith("!")) {
                message.channel.send("MacroBot commands are disabled for <@&758450495991447593> users.");
            }
        }
    }

    
});

db.on('error', err => console.error('Keyv connection error:', err));
client.login(AUTH_TOKEN);
