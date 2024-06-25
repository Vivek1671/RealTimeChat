import React, { useState } from 'react';
import ChatRoom from './ChatRoom';

const App = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (roomId.trim() && username.trim()) {
      setJoined(true);
    }
  };

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f0f0'
    }}>
      <div style={{ 
        background: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        minWidth: '300px'
      }}>
        {joined ? (
          <ChatRoom roomId={roomId} username={username} />
        ) : (
          <form onSubmit={handleJoin}>
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter room ID"
              style={{ 
                width: '100%',
                padding: '8px',
                marginBottom: '10px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{ 
                width: '100%',
                padding: '8px',
                marginBottom: '10px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <button 
              type="submit" 
              style={{ 
                width: '100%',
                padding: '10px',
                background: '#007bff',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Join Room
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
