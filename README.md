# Real Time Chat Application using Node.js, Express.js, Socket.IO, MongoDB, and React

This repository contains a real-time chat application built with Node.js, Express.js, Socket.IO for WebSocket communication, MongoDB for message storage, and React for the frontend.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- Real-time chat communication using WebSocket (Socket.IO).
- Message storage in MongoDB.
- Display of chat history.
- User presence tracking (who's online).
- Responsive React frontend for seamless user interaction.

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- Node.js (v12.x or higher)
- npm (Node Package Manager) or yarn
- MongoDB (make sure it's running locally or accessible)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install dependencies:**

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following variables:

   ```plaintext
   PORT=3001  # or any other port you want to run the server on
   MONGODB_URI=mongodb://localhost:27017/chatapp  # MongoDB connection URI
   ```

4. **Start MongoDB:**

   Ensure MongoDB is running either locally or replace `MONGODB_URI` with your MongoDB connection string.

5. **Start the server and client:**

   ```bash
   # Start the server (from the server directory)
   npm start

   # Start the client (from the client directory)
   npm start
   ```

   The server will run on `http://localhost:3001` and the client will run on `http://localhost:3000`.

## Usage

1. **Access the application:**

   Open your browser and go to `http://localhost:3000` to access the chat application.

2. **Join a chat room:**

   - Enter a username.
   - Choose or create a chat room.

3. **Chat functionality:**

   - Send messages in real-time.
   - View chat history upon joining a room.
   - See who else is currently in the chat room.

## Technologies Used

- **Backend:** Node.js, Express.js, Socket.IO
- **Database:** MongoDB
- **Frontend:** React
- **Other:** npm, WebSocket

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Adjust paths, URLs, and details as per your actual project structure and setup. This README should provide enough information for developers to clone, set up, and use your chat application effectively.
