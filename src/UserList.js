import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect = runs after component mounts (like componentDidMount)
  useEffect(() => {
    console.log("🌀 useEffect called (Component Mounted)");

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log("✅ Data fetched successfully");
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("❌ Error fetching data:", error);
        setLoading(false);
      });

    return () => {
      console.log("🧹 Cleanup function (Component Unmounted)");
    };
  }, []); // empty array = runs once after mount

  console.log("🔁 Component Rendered");

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
