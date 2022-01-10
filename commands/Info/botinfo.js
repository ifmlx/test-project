const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const moment = require("moment"); 
require("moment-duration-format"); 
const settings = require("../../botconfig/settings.json");
let os = require("os");

module.exports = {
    name: "botinfo", //the command name for execution & for helpcmd [OPTIONAL]
    category: "Info",
    usage: "botinfo",
    aliases: ["info", "stats" ],
    cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
    description: "Shows Information about the Bot", //the command description for helpcmd [OPTIONAL]
    memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
    requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
    alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
    run: async (client, message, args) => {

     const butn1 = new MessageButton()
    .setLabel("Invite Link")
    .setStyle("LINK")
    .setEmoji(`:green_circle:`)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=753449822102487160&permissions=8&scope=bot`)

     const row = new MessageActionRow()
     .addComponents([butn1])

                 
                  let duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
                  let connectedchannelsamount = 0;
                  let guilds = client.guilds.cache.map((guild) => guild);
                  for (let i = 0; i < guilds.length; i++) {
                    if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
                  }
                  if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;

                  const botinfo = new MessageEmbed()
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTitle("Bot information")
                    .setDescription(`**Servers**: ${client.guilds.cache.size}\n**Users**: ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\n<:Y_:908779769515085845>**Commands Count**: ${client.commands.size}\n**Ping**: ${client.ws.ping}ms\n**Connections**: ${connectedchannelsamount} Connections\n>**Discord.js**: ${Discord.version}\n**Memory**: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)}MB\n**Uptime**: :clock1: ${duration1}`)
                    .setColor(ee.color)
                  message.reply({ embeds: [botinfo], components: [row] });
      }
   }
