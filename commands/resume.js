const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "resume",
    description: "Түр зогсоосон дууг үргэлжлүүлэх",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Дууг үргэлжлүүллээ!")
      .setColor("YELLOW")
      .setAuthor("Дуу үргэлжиллээ", "https://media4.giphy.com/media/SqBjfxxXe7EZYMpklR/source.gif")
      return message.channel.send(xd);
    }
    return sendError("Тоглуулж бйагаа дуу алга.", message.channel);
  },
};
