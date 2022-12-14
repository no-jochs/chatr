const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const port = 3000;

app.listen(3000, () => console.log('running'));
app.use(express.static(path.join(__dirname, 'public')))
app.get('rooms/:id')