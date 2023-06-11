
const express = require('express')
const app = express();
const http = require('http')
const port = 3000;
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)


// app.get('/', (req, res) => {
//     res.send('Hello World!!!')
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", (_) => {
    console.log("a user connected");
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})