const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/RTChat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define message schema and model
const messageSchema = new mongoose.Schema({
  roomId: String,
  userId: String,
  username: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// WebSocket setup
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on('sendMessage', async (data) => {
    const { roomId, userId, username, message } = data;
    const newMessage = new Message({ roomId, userId, username, message });
    await newMessage.save();
    io.to(roomId).emit('receiveMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// REST API Endpoints
app.post('/chat/join', (req, res) => {
  const { roomId } = req.body;
  // Logic for joining a room can be implemented here
  res.send({ message: `Joined room ${roomId}` });
});

app.post('/chat/send', async (req, res) => {
  const { roomId, userId, username, message } = req.body;
  const newMessage = new Message({ roomId, userId, username, message });
  await newMessage.save();
  io.to(roomId).emit('receiveMessage', newMessage);
  res.send(newMessage);
});

app.get('/chat/history', async (req, res) => {
  const { roomId } = req.query;
  const messages = await Message.find({ roomId }).sort({ timestamp: 1 });
  res.send(messages);
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
