module.exports = {
	name: 'meteo',
	description: 'Donne la météo d\'une ville',
	execute(message, args) {
        if (message.author.username === 'Taikpaf'){
            const user = getUserFromMention(args[0])
            const index = listMembers.findIndex( elem => elem.name === user?.username )
            listMembers[index].balance = listMembers[index].balance + parseInt(args[1])
            message.channel.send('Le solde de : '+listMembers[index].name +' est de :'+listMembers[index].balance+' coins')
        }
	},
};