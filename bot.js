const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";


client.on("ready", () => {
  console.log("consola cargada")
	client.user.setPresence({
       status: "online",
       game: {
           name: "| play.nethermc.net |",
           type: "STREAMING"
       }
   });
});






client.on("message", (message) => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  if (message.content.startsWith(prefix + "encuesta")) {
    let text = args.join(" ");
    message.delete();
    const ayy = client.emojis.find(emoji => emoji.name === "Visto");
    const ayy1 = client.emojis.find(emoji => emoji.name === "Cross");
    if (message.channel.id === '621338748994715658') {
      const embed = new Discord.RichEmbed()
        .setAuthor('❗ Pregunta: ❗',)
        .setDescription(text)
        .addField('▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔', 'Utiliza para votar:')
        .addField('Opción 1:', `${ayy}`)
        .addField('Opción 2:', `${ayy1}`)
        .setColor(2123412)
        .setTimestamp()
        .setFooter("IP: play.heavenmc.es", 'https://i.imgur.com/FwiJzpS.png')			
        message.channel.send({embed})
        .then(function (message) {
            message.react(ayy);
            message.react(ayy1);
		  	});
		}
  }
  if (command === "eliminar-canal") { 
      const channelasd = message.channel;
      const guild = message.guild;
      const nombrecanal = channelasd.name;
      let [name] = args; 
      channelasd.delete('Canal eliminado')
     .then(deleted => console.log(`El canal ${deleted.name} se elimino correctamente`))
     const canaldeleteado = new Discord.RichEmbed()
     .setTitle("Canal Eliminado:", 'https://i.imgur.com/FwiJzpS.png')
     .addField("Autor:", `${message.author}`)
     .addField("Canal:", `#${nombrecanal}`)
     .setColor(10038562)
     .setThumbnail(message.author.avatarURL)
     .setFooter("IP: play.heavenmc.es", 'https://i.imgur.com/FwiJzpS.png');
      client.channels.get('621353649729306634').send(canaldeleteado);

      }
  if (command === "presente") {
    if (message.channel.id === '621353649729306634') {
     message.delete();
     var ahora = new Date();
     var minuto = ahora.getUTCMinutes();  
     var hora = ahora.getUTCHours() + 2;
     var segundo = ahora.getUTCSeconds();
     let mes = [`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];
     let suffix = [`st`,`nd`,`rd`];
     const darpresente = new Discord.RichEmbed()
     .setTitle("Presente:", 'https://i.imgur.com/FwiJzpS.png')
     .addField("Staff:", `  ${message.author}`)
     .addField("Hora:", `  ${hora}h:${minuto}m:${segundo}s - Hora España`)
     .addField("Dia:", `  ${ahora.getDate()} de ${mes[ahora.getMonth()]} de 2019 `)
     .setColor(3066993)
     .setThumbnail(message.author.avatarURL)
     .setFooter("IP: play.heavenmc.es", 'https://i.imgur.com/FwiJzpS.png');
     client.channels.get('621353649729306634').send(darpresente);
      }
  }   
  
  if (command === "ausente") {
    if (message.channel.id === '621353649729306634') {
     message.delete();
     var ahora = new Date();
     var minuto = ahora.getUTCMinutes();  
     var hora = ahora.getUTCHours() + 2;
     var segundo = ahora.getUTCSeconds();
     let mes = [`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];
     let suffix = [`st`,`nd`,`rd`];
     const darpresente = new Discord.RichEmbed()
     .setTitle("Ausente:", 'https://i.imgur.com/FwiJzpS.png')
     .addField("Staff:", `  ${message.author}`)
     .addField("Hora:", `  ${hora}h:${minuto}m:${segundo}s - Hora España`)
     .addField("Dia:", `  ${ahora.getDate()} de ${mes[ahora.getMonth()]} de 2019 `)
     .setColor(15158332)
     .setThumbnail(message.author.avatarURL)
     .setFooter("IP: play.heavenmc.es", 'https://i.imgur.com/FwiJzpS.png');
     client.channels.get('621353649729306634').send(darpresente);
      }
  }   
});
  

   
client.login(process.env.BOT_TOKEN);
