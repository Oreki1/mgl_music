const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "Бүх комманд-ыг үзэх",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="``"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor(client.user.username,+ "Коммандyyд", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
        .setColor("#FF0000")
        .setDescription(allcmds)
        .setFooter(`Коммандyyдыг дэлгэрэгүй үзэхийг хүсвэл ${client.config.prefix}help [command] | Хөгжүүлсэн Ayato#5763`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Комманд биш байна")
            let commandinfo = new MessageEmbed()
            .setTitle("Комманд: "+command.info.name)
            .setColor("YELLOW")
            .setDescription(`
Нэр: ${command.info.name}
Тайлбар: ${command.info.description}
Заавар: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Хураангүй комманд: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
