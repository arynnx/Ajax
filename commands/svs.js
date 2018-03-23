const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let msg =  bot.guilds.map(guild => `${guild.name}(${guild.id}) Members: ${guild.memberCount} Owner: ${guild.owner.displayName}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle("Servers")
  .setDescription(`\`\`\`xl\n${msg}\n\`\`\``)
  .setColor("#ebf442");
  message.channel.send(embed);
}

module.exports.help = {
  name: "svs"
}

