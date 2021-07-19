const discord = require('discord.js')
module.exports = {
	name: 'classement',
	description: 'Classement des joueurs',
	execute(message, args) {
        const tab = listMembers
        sortArray(tab, {
            by: 'balance',
            order: 'desc'
        })

        const Embed = new discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle('Classement des joueurs')
        tab.forEach(elem => {
            Embed.addFields(
            { name: 'Pseudo', value: elem.name, inline: true },
            { name: 'Solde', value: elem.balance+' coins', inline: true },
            { name: '\u200B', value: '\u200B',  inline: true },
            )
        })
        message.reply(Embed)
	},
};