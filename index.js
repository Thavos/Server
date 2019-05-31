const express = require('express');
const PORT = process.env.PORT || 5000;

const server = express()
    .use((req,res) => res.send("Server running on : " + PORT)
    .listen(PORT, () => console.log('Listening')))