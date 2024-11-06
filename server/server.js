const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS to allow requests from the Vite frontend

// Endpoint to get server time
app.get('/server-time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ time: currentTime });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
