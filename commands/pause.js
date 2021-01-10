const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "pause",
    description: "Дууг түр зогсоох",
    usage: "[pause]",
    aliases: ["pause"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: Зогсоох дуу листэд алга.: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ Дууг түр зогсоолоо!")
      .setColor("YELLOW")
      .setTitle("Дуу түр зогсов!")
      .setAuthor(`https://media2.giphy.com/media/giiMCQssQROwu5wiXn/giphy.gif`)
      return message.channel.send(xd);
    }
    return sendError("Түр зогсоох дуу алга.", message.channel);
  },
};
