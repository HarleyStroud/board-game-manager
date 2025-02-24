-- Add games table definition
CREATE TABLE games (
    id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL UNIQUE,
    min_players INTEGER UNSIGNED,
    max_players INTEGER UNSIGNED,
    game_description TEXT,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP
);


-- Add game sessions table definition
CREATE TABLE game_sessions (
    id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    game_id INTEGER UNSIGNED,
    date_played DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (game_id) REFERENCES games(id) ON UPDATE CASCADE ON DELETE CASCADE
);


-- Insert sameple games data
INSERT INTO games (name, min_players, max_players, game_description, date_added) VALUES
('Monopoly', 2, 8, 'A classic board game where players buy, sell, and trade properties to bankrupt their opponents.', '2021-04-12 10:00:00'),
('Battleship', 2, 2, 'A strategic game where players take turns guessing the locations of the opponent''s ships on a grid.', '2021-07-19 14:30:00'),
('Candy Land', 2, 4, 'A simple racing board game where players move their pieces along a colorful path based on card draws.', '2021-09-05 09:15:00'),
('Chess', 2, 2, 'A two-player strategy game played on an 8x8 grid where each player controls 16 pieces with the objective to checkmate the opponent''s king.', '2022-02-11 16:45:00'),
('Checkers', 2, 2, 'A strategy game for two players involving diagonal moves and capturing of opponent pieces by jumping over them.', '2022-05-23 11:20:00'),
('Risk', 2, 6, 'A game of global domination where players control armies to conquer territories and continents.', '2022-07-30 13:55:00'),
('Chutes & Ladders', 2, 4, 'A simple game where players navigate a board from start to finish based on dice rolls, with chutes and ladders affecting their progress.', '2023-01-14 15:10:00'),
('Clue', 3, 6, 'A murder mystery game where players deduce who committed the crime, with what weapon, and in which room.', '2023-03-22 17:25:00'),
('Jenga', 2, 6, 'A game where players take turns removing one block at a time from a tower of wooden blocks, aiming to avoid toppling the tower.', '2023-06-18 12:40:00'),
('Settlers of Catan', 3, 4, 'A strategy game where players collect and trade resources to build roads, settlements, and cities to dominate the island of Catan.', '2023-09-27 14:55:00'),
('Catan', 3, 4, 'A strategy game where players collect and trade resources to build roads, settlements, and cities to dominate the island of Catan.', '2021-03-15 14:30:00'),
('Pandemic', 2, 4, 'A cooperative game where players work together as a team of specialists to stop the global spread of four diseases.', '2021-06-22 09:15:00'),
('Ticket to Ride', 2, 5, 'A railway-themed board game where players collect cards to claim railway routes across a map.', '2022-01-10 17:45:00'),
('Carcassonne', 2, 5, 'A tile-placement game where players build cities, roads, and fields to score points.', '2022-08-05 11:20:00'),
('Splendor', 2, 4, 'A game of chip-collecting and card development where players are merchants of the Renaissance trying to buy gem mines, means of transportation, and shops.', '2023-02-18 13:55:00');


-- Insert sameple game session data
INSERT INTO game_sessions (game_id, date_played) VALUES
 (1,'2024-12-02 17:08:56'),
 (1,'2024-12-05 17:08:56'),
 (2,'2024-12-05 18:08:56'),
 (2,'2024-12-11 17:08:56'),
 (2,'2024-12-16 17:08:56'),
 (3,'2024-12-19 17:08:56'),
 (3,'2024-12-25 17:08:56'),
 (3,'2025-01-23 17:08:56'),
 (4,'2025-01-29 15:08:56'),
 (4,'2025-01-29 18:08:56'),
 (5,'2025-01-29 19:08:56'),
 (6,'2025-02-01 17:08:56'),
 (6,'2025-02-05 17:08:56'),
 (6,'2025-02-09 17:08:56'),
 (7,'2025-02-14 17:08:56'),
 (7,'2025-02-15 17:08:56'),
 (7,'2025-02-15 18:08:56'),
 (7,'2025-02-16 17:08:56'),
 (7,'2025-02-18 15:08:56'),
 (8,'2025-02-18 17:08:56'),
 (8,'2025-02-24 17:08:56'),
 (8,'2025-02-25 17:08:56'),
 (9,'2025-02-26 14:35:56'),
 (9,'2025-02-26 17:08:56'),
 (9,'2025-02-27 17:08:56'),
 (10,'2025-02-28 12:34:56'),
 (10,'2025-02-28 17:08:56');