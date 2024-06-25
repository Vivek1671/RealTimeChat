import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h4>Users in Room:</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
