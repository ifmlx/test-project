const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
module.exports = {
  name: "invite", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Info",
  usage: "invite",
  aliases: ["inviteme", "addme" ],

  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "Sends you an invite link", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
   
   

  
      const butn1 = new MessageButton()
    .setLabel("Invite Link")
    .setStyle("LINK")
       .setEmoji(`<:Y_:908779769515085845>`)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=794105499960082464&permissions=8&scope=bot`)

const row = new MessageActionRow()
 .addComponents([butn1])

const embed = new MessageEmbed()
.setColor(ee.color)    
.setAuthor("")
.setDescription(` \`Invite Me Now , thanks\` `)
       

     message.reply({ embeds: [embed], components: [row] });
   
    }
}
