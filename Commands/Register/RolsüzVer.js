const Command = require("../../base/Command.js");
const Permissions = require("../../Settings/Permissions.json");
const Role = require("../../Settings/Role.json");
const Discord = require("discord.js")
const kayıtlar = require("../../models/kayıt.js")

class RolsüzVer extends Command {
    constructor(client) {
        super(client, {
            name: "rolsuz",
            description: "Latency and API response times.",
            usage: "rolsüz",
            aliases: ["rolsuz","rolsüz"]
        });
    }

    async run(message, args, level) {
        if(!message.member.roles.cache.has(Permissions.Trident) && !message.member.hasPermission("VIEW_AUDIT_LOG")) return
        let hayp034 = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)
    
        if(args[0] == "ver") {
            hayp034.forEach(r => {
        r.roles.add(Role.Register.Unregistered)
        })
        const hayp034 = new Discord.MessageEmbed()
        .setAuthor(" "+message.author.username +" ", message.author.avatarURL())
        .setColor("RANDOM")
        .setDescription("Sunucuda rolü olmayan (everyone rolünde olan) \`"+ hayp034.size +"\` kişiye kayıtsız rolü verildi!")
        message.channel.send(hayp034)
        } else if(!args[0]) {
        const hayp034 = new Discord.MessageEmbed()
        .setAuthor(""+message.author.username +" ", message.author.avatarURL())
        .setColor("RANDOM")
        .setDescription(`Sunucumuzda rolü olmayan (everyone rolünde olan) \``+ hayp034.size +`\` kişi var. Bu kişilere kayıtsız rolü vermek için \`.rolsüz ver\` komutunu uygulayın!`)
        message.channel.send(hayp034)
        }
    }
}

module.exports = RolsüzVer;

