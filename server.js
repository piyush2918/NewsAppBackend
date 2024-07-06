const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/news', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=364262e333184fe7a63991cf17c550b9`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
