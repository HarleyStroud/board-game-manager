const db = require('../db');
module.exports = {
	getAdd: (req, res) => {
		const selectedGameId = req.query.gameId;
		const selectedGameName = req.query.gameName;
        
		res.render('add-game-session.ejs', {
			title: 'Board Games | Add game',
			gameId: selectedGameId,
			gameName: selectedGameName
		});
	},
	postAdd: async (req, res) => {
        try {
            console.log(req.body);

            const gameId = parseInt(req.body.gameId);
            // Format datetime for database
            const [date, time] = req.body.datetime.split('T');
            const formattedDateTime = `${date} ${time}:00`;
            
            // Insert new game-playing session for the selected game
            const query = "INSERT INTO game_sessions (game_id, date_played) VALUES (?, ?)";
            const result = await db.query(query, [gameId, formattedDateTime]);
            res.redirect('/'); 
        }
        catch (error) {
            console.error('Database error:', error.message);
        }
	}
};
