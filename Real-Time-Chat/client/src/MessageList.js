import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message._id}>
          <strong>{message.username}:</strong> {message.message}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
