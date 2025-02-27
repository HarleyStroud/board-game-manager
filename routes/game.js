const req = require('express/lib/request');
const db = require('../db');
module.exports = {
	getAdd: (req, res) => {
		res.render('add-game.ejs', {
			title: 'Board Games | Add game'
		});
	},
	getEdit: async (req, res) => {
		try {
			// Get selected game to edit from database.
			const id = parseInt(req.params.id);
			const query = "SELECT * FROM games WHERE id = ?";

			const result = await db.query(query, [id]);
			res.render('edit-game.ejs', {
				title: 'Board Games | Edit game',
				game: result[0]
			});
		}
		catch (error) {
			console.error('Database error:', err.message);
			return res.status(500).send('Failed to fetch game data');
		}
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
	},
	postEdit: async (req, res) => {
		try {
			const id = parseInt(req.params.id);
			const newName = req.body.name;
			const minPlayers = req.body.min_players;
			const maxPlayers = req.body.max_players;
			const description = req.body.description;
			
			// Update the edited game record.
			const query = "UPDATE games SET name = ?, min_players = ?, max_players = ?, game_description = ? WHERE id = ?";
			const result = await db.query(query, [newName, minPlayers, maxPlayers, description, id]);
			
			res.redirect('/');
		} 
		catch (error) {
			console.error('Database error:', err.message);
			return res.status(500).send('Failed to update game data');
		}
	}
};
