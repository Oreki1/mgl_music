const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "volume",
    description: "To change the server song queue volume",
    usage: "[volume]",
    aliases: ["v", "vol"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("Voice channel-д орохгүй бол ажиллахгүй!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Тоглуулж байгаа дуу алга."  , message.channel);
    if (!args[0])return message.channel.send(`Одоо байгаа volume: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Зөвхөн тоо!').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('Чанга сул зөвхөн 150-аас 0-ийн хооронд байх ёстой.',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`volume-ыг: **${args[0]/1}/100** болголоо`)
    .setAuthor("Volume-ийг Таарууллаа", "https://media2.giphy.com/media/kyFiG2ZqmA2vbkgIxn/source.gif")
    .setColor("BLUE")
    return message.channel.send(xd);
  },
};
