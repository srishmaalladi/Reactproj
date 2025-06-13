import React, { useState, useEffect } from "react";

const predefinedUsers = [
  { username: "user1", password: "pass123" },
  { username: "admin", password: "admin123" }
];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Check if user session exists in localStorage
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setLoggedInUser(savedUser);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = predefinedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setLoggedInUser(user.username);
      localStorage.setItem("loggedInUser", user.username);
      alert(`Welcome, ${user.username}!`);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  if (loggedInUser) {
    return (
      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <h2>Welcome, {loggedInUser}</h2>
        <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
