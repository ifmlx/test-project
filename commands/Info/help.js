const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const Discord = require("discord.js");
const prefix = ",";
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
 module.exports = {
    name: "help",
    category: "Info",
    aliases: ["h", "halp", "helpme", "hilfe"],
    usage: "help [cmdname]",
    run: async (client, message, args) => {


       const embed = new MessageEmbed()
    .setDescription(`I am <@${client.user.id}>, A Discord Music Bot With Many Awesome Features. \n\n\`🎶\` Music Commands\n\`ℹ️\` Info Commands\n\`*️⃣\` Filter Commands\n\n *Choose an category below button to see commands* \n\n *To invite bot, [ click here ](https://discord.com/api/oauth2/authorize?client_id=791856757844475914&permissions=8&scope=bot)*`)
    
    .setColor(ee.color)
   
    let but1 = new MessageButton().setCustomId("home").setLabel("Home").setStyle("SECONDARY")
  
    let but2 = new MessageButton().setCustomId("music").setLabel("Music").setStyle("SUCCESS")
  
    let but3 = new MessageButton().setCustomId("info").setLabel("Info").setStyle("SUCCESS");

    let but4 = new MessageButton().setCustomId("filter").setLabel("Filter").setStyle("SUCCESS");

    // let _commands;
     let editEmbed = new MessageEmbed();
     
    const m = await message.channel.send({ content: `👋 Hello **<@${message.author.id}>**`, embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] });

    const collector = m.createMessageComponentCollector({
      filter: (b) => {
      if(b.user.id === message.author.id) return true;
       else {
     b.reply({ ephemeral: true, content: `Only **${message.author.username}** can use this button, if you want then you've to run the command again.`}); return false;
           };
      },
      time : 60000,
      idle: 60000/2
    });
    collector.on("end", async () => {
		 if(!m) return;
        await m.edit({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true), but4.setDisabled(true))] }).catch(() => {});
    });
    collector.on('collect', async (b) => {
        if(b.customId === "home") {
           if(!m) return;
           return await m.edit({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
        if(b.customId === "music") {
        // _commands = client.commands.filter((x) => x.category && x.category === "Music").map((x) => `\`${x.name}\``);
             editEmbed.setColor(ee.color).setTitle("Music Commands").setDescription(`\`play, playlist, autoplay, lyrics, previous, addend, replay, grab, jump, volume, stop, skip, forward, rewind, seek, loop, queue, clear-queue, nowplaying\``).setFooter(`Total (19) Music Commands`);
           if(!m) return;
           return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
         if(b.customId == "info") {
       //  _commands = client.commands.filter((x) => x.category && x.category === "Info").map((x) => `\`${x.name}\``);
             editEmbed.setColor(ee.color).setTitle("Info Commands").setDescription(`\`invite, ping, info\``).setFooter(`Total (3) Info Commands`)
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         }
         if(b.customId == "filter") {
      //   _commands = client.commands.filter((x) => x.category && x.category === "Filter").map((x) => `\`${x.name}\``);
             editEmbed.setColor(ee.color).setTitle("Filter Commands").setDescription(`\`8d, lightbass, heavybass, bassboost, purebass, nightcore, vibrato, surrounding, subboost, karaoke, gate, haas, flanger, treble\``).setFooter(`Total (14) Filter Commands`)
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         
        }
     });
   

      
}
}
   
  
