const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    const startTime = new Date();
    console.log(`${startTime.toLocaleTimeString()} | Express server running on port ${PORT}.`);
});

app.use(express.static(path.join(__dirname, 'public')))