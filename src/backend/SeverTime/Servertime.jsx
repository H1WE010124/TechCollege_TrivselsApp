// src/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [serverTime, setServerTime] = useState(null);

  const getServerTime = async () => {
    try {
      const response = await fetch('http://localhost:5000/server-time');
      const data = await response.json();
      setServerTime(data.time);
    } catch (error) {
      console.error('Error fetching server time:', error);
    }
  };

  useEffect(() => {
    getServerTime();
  }, []);

  return (
    <div>
      <h1>Server Time</h1>
      {serverTime ? <p>{serverTime}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
