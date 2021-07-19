module.exports = {
	name: 'solde',
	description: 'Miser des coins',
	execute(message, args) {
        const index = listMembers.findIndex( elem => elem.name === message.author.username )
        message.reply('Votre solde est de :'+listMembers[index].balance+' coins')
	},
};