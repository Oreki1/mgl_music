const { MessageEmbed } = require("discord.js");

module.exports = {
    info: {
        name: "invite",
        description: "invite server-тээ энэ ботыг yрих.",
        usage: "[invite]",
        aliases: ["inv"],
    },

    run: async function(client, message, args) {

        //set the permissions id here (https://discordapi.com/permissions.html)
        var permissions = 37080128;

        let invite = new MessageEmbed()
            .setTitle(`Invite ${client.user.username}`)
            .setDescription(`Намайг хүсээ юy? Яаг одоо  yрь! \n\n [Над дээр дараад бот-оо ав :)](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
            .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
            .setColor("BLUE")
        return message.channel.send(invite);
    },
};