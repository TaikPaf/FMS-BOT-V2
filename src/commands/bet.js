const Roulette = require('../class/roulette')

module.exports = {
	name: 'bet',
	description: 'Miser des coins',
	execute(message, args) {
        if (!args.length) {
			return message.reply(`Vous n'avez pas fourni suffisamment d'information : !bet montant couleur(rouge, noir ou vert) !`);
		}
        const index = listMembers.findIndex( elem => elem.name === message.author.username )
        if (parseInt(args[0]) <= listMembers[index].balance){
            listMembers[index].balance = listMembers[index].balance - parseInt(args[0])
            let number = Roulette.getRandomNumber();
            message.reply('https://blog.grosvenorcasinos.com/wp-content/uploads/2018/11/Roulette_Board_Top-min1.png')
            if (Roulette.black.includes(number) && args[1] == 'noir'){
                listMembers[index].balance = listMembers[index].balance + (parseInt(args[0])* 2)
                message.reply("Le numéro tiré est le : "+number+', félicitations vous avez gagné. Votre solde est de :'+listMembers[index].balance+' coins')
            }
            else if (Roulette.red.includes(number) && args[1] == 'rouge'){
                listMembers[index].balance = listMembers[index].balance + (parseInt(args[0])* 2)
                message.reply("Le numéro tiré est le : "+number+', félicitations vous avez gagné. Votre solde est de :'+listMembers[index].balance+' coins')
            }
            else if (number == 0 && args[1] == 'vert'){
                listMembers[index].balance = listMembers[index].balance + (parseInt(args[0])* 10)
                message.reply("Le numéro tiré est le : "+number+', félicitations vous avez gagné. Votre solde est de :'+listMembers[index].balance+' coins')
            }
            else {
                message.reply('Le numéro tiré est le : '+ number +' et vous avez perdu.')
            }
           
        } else {
            return message.reply('Me prend pas pour une andouille, t\'as pas la thune !');
        }
	},
};