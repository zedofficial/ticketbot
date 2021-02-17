/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 * 
 * ---------------------
 *      Quick Start
 * ---------------------
 * 
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 * 
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 * 
 * ---------------------
 *       Support
 * ---------------------
 * 
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 * 
 * ###############################################################################################
 */

module.exports = {
	prefix: '-',
	name: 'DiscordTickets',
	activities: ['-new', 'with tickets', 'for new tickets'],
	activity_types: ['PLAYING', 'PLAYING', 'WATCHING'],
	colour: '#009999',
	err_colour: '#E74C3C',
	cooldown: 3,

	guild: '703386372202823760', // ID of your guild
	staff_role: '703452222003871787', // ID of your Support Team role

	tickets: {
		category: '732150853733056602', // ID of your tickets category
		send_img: true,
		ping: 'here',
		text: `Hello there, {{ tag }}!
		A member of staff will assist you shortly.
		In the mean time, please describe your issue in as much detail as possible! :)`,
		pin: false,
		max: 3
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		}
	},

	panel: {
		title: 'Support Tickets',
		description: 'Need help? No problem! React to this panel to create a new support ticket so our Support Team can assist you.',
		reaction: '🧾'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 7
		},
		discord: {
			enabled: false,
			channel: '703468461405503559' // ID of your log channel
		}
	},
	
	debug: false,
	updater: true
};
