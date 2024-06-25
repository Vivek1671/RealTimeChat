import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRoom from './ChatRoom';

const AppRouter = ({ username, handleUsernameSubmit, setUsername }) => {
  return (
    <Router>
      <Routes>
        <Route path="/chat">
          {() => {
            console.log('Navigated to chat route');
            return <ChatRoom username={localStorage.getItem('username')} />;
          }}
        </Route>
        <Route path="/">
          {() => {
            console.log('Navigated to home route');
            return (
              <form onSubmit={handleUsernameSubmit}>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Join Chat</button>
              </form>
            );
          }}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
