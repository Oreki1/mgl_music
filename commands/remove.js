const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "remove",
    description: "Дууг листээс хасах",
    usage: "rm <тоо>",
    aliases: ["rm"],
  },

  run: async function (client, message, args) {
   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("Листэд алга.",message.channel).catch(console.error);
    if (!args.length) return sendError(`Заавар: ${client.config.prefix}\`remove <лист дахь дэс дугаар>\``);
    if (isNaN(args[0])) return sendError(`Заавар: ${client.config.prefix}\`remove <лист дахь дэс дугаар>\``);
    if (queue.songs.length == 1) return sendError("Листэд алга.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`Листэд ${queue.songs.length} дуу л байна!`,message.channel).catch(console.error);
try{
    const song = queue.songs.splice(args[0] - 1, 1); 
    sendError(`❌ **|** Хасав: **\`${song[0].title}\`** дууг листээс хаслаа.`,queue.textChannel).catch(console.error);
                   message.react("✅")
} catch (error) {
        return sendError(`:notes: Алдаа.\n Алдаа: ${error}`, message.channel);
      }
  },
};
