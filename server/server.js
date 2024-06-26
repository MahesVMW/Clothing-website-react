// server/app.js

const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Endpoint to receive destination from the client
app.post('/api/places', async (req, res) => {
  try {
    const { destination } = req.body;
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${destination}&addressdetails=1&limit=5`;
    const response = await axios.get(apiUrl);
    const places = response.data;
    res.json(places);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
