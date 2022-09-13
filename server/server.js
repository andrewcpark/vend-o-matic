const express = require ('express');
const app = express();

// SERVER WILL LISTEN ON PORT 3000
const PORT = 3000;


// MAKE SURE SERVER IS LISTENING ON THE CORRECT PORT
app.listen(PORT, () => {
    console.log (`Server is listening on Port: ${PORT}`);
  });