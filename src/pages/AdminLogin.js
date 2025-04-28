import React, { useState } from 'react';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Normally, you would validate the credentials against a database
    // For this example, we'll just show a simple alert.
    if (credentials.username === 'admin' && credentials.password === 'password') {
      alert('Logged in successfully');
      // Redirect to Admin Dashboard, for example:
      window.location.href = '/admin-dashboard'; // Just an example, you might want to use React Router
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
