const Discord = require('discord.js')
const client = new Discord.Client()




client.once('ready', () => {
    console.log('Ya estoy listo');

    client.user.setPresence({
        status: 'available',
        activity: {
            name: 'utiliza - 9z/partidos',
            type: 'PLAYING',
            url: 'https://twitch.tv/9zteam'
        }
    });
});


client.on("message", (message) => {
	const prefix = "9z/"
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === 'conexion') {
		let ping = Math.floor(message.client.ping);
		message.channel.send({embed: {
				color: 7419530,
				description: `:satellite_orbital: Tu conexion es de ${ping} ms`
			}});
		return;
	}
	if (command === 'partidos') {
		 message.author.delete
		 message.author.send("https://cdn.discordapp.com/attachments/759466344633729064/775386819951853578/unknown.png")
		 message.author.send("https://cdn.discordapp.com/attachments/759466344633729064/775387133049176094/unknown.png")
		 message.reply({embed: {
			color: 7419530,
			description: message.member.displayName + ` Te enviamos un mensaje al privado con los partidos`
		}})
		 .then(msg => {
		 msg.delete({ timeout: 10000 })
		  })		  
	}

	if (command === 'reinicio') {
			if (!isBotOwner)
			  return;
	  
			message.channel.send('Restarting...').then(m => {
			  client.destroy().then(() => {
				client.login(process.env.BOT_TOKEN);
			  });
			});
			break;
		  }
	

});


client.login(process.env.BOT_TOKEN);
