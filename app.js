const app = require('express')();
const http = require('http').Server(app);
const port = require('./config/server.json').port || 3000;
const socket = require('./src/socket/socket');
const path = require("path");
const io = require('socket.io')(http);
const chatRoutes = require('./routes/chat.route');
const databaseConnection = require('./src/repo/database');

databaseConnection.connect();
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(chatRoutes);

socket.start(io);



http.listen(port, function () {
    console.log('Server chạy trên cổng: ' + port +", bạn truy cập vào routes: /customer và /trainer để test");
});
