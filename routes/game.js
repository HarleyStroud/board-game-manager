const db = require('../db');
module.exports = {
	getAdd: (req, res) => {
		res.render('add-game.ejs', {
			title: 'Board Games | Add game'
		});
	},
	postAdd: async (req, res) => {
		try {
			console.log("postAdd request:", req.body);

			const gameName = req.body.name;
			const minPlayers = req.body.min_players;
			const maxPlayers = req.body.max_players;
			const description = req.body.description;

			// Insert new game record
			let query = "INSERT INTO games (name, min_players, max_players, game_description) VALUES (?, ?, ?, ?)";
			const result = await db.query(query, [gameName, minPlayers, maxPlayers, description]);

			res.redirect('/'); 
		} 
		catch (error) {
			console.error('Database error:', error.message);
			return res.status(500).send('Failed to insert new game record');
		}
	}
};
