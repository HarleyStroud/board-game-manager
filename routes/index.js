const db = require('../db');
module.exports = {
    getHomePage: (req, res) => {
		// Query to select all games, as well as the most recent play session for each one.
		const query = `
            SELECT 
                games.id AS game_id,
                games.name,
                games.min_players,
                games.max_players,
                games.date_added,
                game_sessions.latest_date_played,
                COALESCE(game_sessions.total_sessions, 0) AS total_sessions
            FROM games
            LEFT JOIN (
                SELECT 
                    game_id,
                    MAX(date_played) AS latest_date_played,
                    COUNT(*) AS total_sessions
                FROM game_sessions
                GROUP BY game_id
            ) game_sessions ON game_sessions.game_id = games.id
            ORDER BY games.name;
		`;

		db.query(query, (err, result) => {
			if (err) {
				console.log("Error querying game data:", err);
				return res.redirect('/');
			}
			res.render('index.ejs', {
				title: 'Board Games | View Games',
				gameData: result
			});
		});
	}
};
