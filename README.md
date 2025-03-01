# Board Game Manager

**Board Game Manager** is a web application that allows users to manage their board game collection and track play sessions. Users can add board games, record play sessions with player details and dates, and track the number of times each game has been played.

---

## Features
- **Game Collection Management** – Add board games with details such as a description and recommended minimum and maximum players.
- **Game Session Tracking** – Log each play session, track the number of times each game has been played, and view the play history.

---

## Technologies
- **Backend:** Node.js, Express.js
- **Database:** MariaDB (SQL)
- **Templating:** EJS
- **Containerization:** Docker, Docker Compose

---

## Setup and Installation

### Prerequisites
- Install [Node.js](https://nodejs.org/en/)
- Install [Docker Compose](https://docs.docker.com/compose/)

### Running the Application

1. Clone the repository:
    ```sh
    git clone <repo-url>

2. Navigate to the project directory:
    ```
    cd board-game-directory
    ```

3. Start the database and application:
    ```
    docker compose up --build
    ```

4. Open http://localhost:3000 in a browser to access the app.

5. To stop the application:
    ```
    docker compose down
    ```

## About This Project

This project was built to provide a practical way to track board games and play sessions. Beyond its functionality, it was also an opportunity to:

- Develop a full-stack application using Node.js, Express, and SQL databases
- Implement containerized deployment using Docker and Docker Compose
