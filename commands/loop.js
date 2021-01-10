const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "loop",
    description: "Дууг дахин тоглуулах.",
    usage: "loop",
    aliases: ["l"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Дахин тоглуулах **\`${serverQueue.loop === true ? "Асаав" : "Унтраав"}\`**`
                }
            });
        };
    return sendError("Дуу тоглуулаагүй байна.", message.channel);
  },
};
