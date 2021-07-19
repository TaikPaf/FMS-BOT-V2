const axios = require('axios')
const discord = require('discord.js')

module.exports = {
	name: 'meteo',
	description: 'Donne la météo d\'une ville',
	execute(message, args) {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+args[0]+'&units=metric&appid=16dec23fddf0f6244b15276d035e647e&lang=FR')
        .then((result) => {
            message.reply('Voici la météo !')
            const Embed = new discord.MessageEmbed()
            .setColor("#0099ff")
            .setImage("http://openweathermap.org/img/w/"+result.data.weather[0].icon+".png")
            .setTitle('Météo actuelle à '+args[0])
            .setDescription('Il fait : '+result.data.weather[0].description)
            .addFields(
                { name: 'Température', value: result.data.main.temp+' °C', inline: true },
		        { name: 'T° Ressentie', value: result.data.main.feels_like+' °C', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Température Max', value: ''+result.data.main.temp_max+' °C', inline: true },
                { name: 'Température Min', value: ''+result.data.main.temp_min+' °C', inline: true },
            )
            message.reply(Embed)
            
        })
        .catch((error) => {
            console.log(error.message)
            message.reply('Une erreur est survenue ! ')
        })
	},
};