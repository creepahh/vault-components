const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const summarizeRoute = require('./routes/summarize');

const app = express();

// Middleware
app.use(bodyParser.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.use('/api', summarizeRoute);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
