const express = require('express');
const app = express();

// Serve client files
app.use(express.static('client'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
