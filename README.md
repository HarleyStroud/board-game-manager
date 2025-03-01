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

---

## Screenshots

![Image](https://github.com/user-attachments/assets/eac4e5f8-628d-4845-a1fd-4324d461641a)

![Image](https://github.com/user-attachments/assets/5f135f13-e23c-4324-a12f-71526eb6311c)

![Image](https://github.com/user-attachments/assets/7425936c-d7f4-4977-94a3-c99b4996cee0)

![Image](https://github.com/user-attachments/assets/1f7cb825-8b82-4e00-bae0-449b87d646a2)


## About This Project

This project was built to provide a practical way to track board games and play sessions. Beyond its functionality, it was also an opportunity to:

- Develop a full-stack application using Node.js, Express, and SQL databases
- Implement containerized deployment using Docker and Docker Compose
