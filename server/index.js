const express = require('express');
const session = require('express-session');

const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = http.createServer(app);

const sessionMiddleware = session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
});

app.use(sessionMiddleware);

app.post('/login', (req, res) => {
    req.session.authenticated = true,
        req.status(204).end();
});

const io = socketio(httpServer);

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

io.use(wrap(sessionMiddleware));
// app.listen(PORT, () => {
//     const startTime = new Date();
//     console.log(`${startTime.toLocaleTimeString()} | Express server running on port ${PORT}.`);
// });

app.use(express.static(path.join(__dirname, '../dist/index.html')));
