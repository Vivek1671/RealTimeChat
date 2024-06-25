import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

const socket = io('http://localhost:5000');

const ChatRoom = ({ roomId, username }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', roomId);

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    const fetchChatHistory = () => {
      axios.get(`http://localhost:5000/chat/history?roomId=${roomId}`)
        .then(response => {
          setMessages(response.data);
        })
        .catch(error => {
          console.error('Error fetching chat history:', error);
        });
    };

    // Initial fetch
    fetchChatHistory();

    // Set up interval for auto-refresh
    const intervalId = setInterval(fetchChatHistory, 1000);

    return () => {
      socket.off('receiveMessage');
      clearInterval(intervalId); // Clear the interval when component unmounts
    };
  }, [roomId]);

  const handleSendMessage = (message) => {
    const messageData = { roomId, userId: socket.id, username, message };
    socket.emit('sendMessage', messageData);
    axios.post('http://localhost:5000/chat/send', messageData)
      .catch(error => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <div>
      <h2>Chat Room: {roomId}</h2>
      <UserList users={users} />
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;
