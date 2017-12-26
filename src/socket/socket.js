const EVENT_CONNECTION = 'connection';
const EVENT_DISCONNECT = 'disconnect';
const EVENT_MESSAGE = 'chat_message';
const chatRepo = require('../repo/chat.repo');

/*
 Client kết nối đến server
 */
exports.start = function (io) {
    io.on(EVENT_CONNECTION, function (socket) {
        onDisconnectEvent(socket);
        onMessageEvent(socket, io);
    });
};

/*
 Client disconnect
 */
let onDisconnectEvent = function (socket) {
    socket.on(EVENT_DISCONNECT, function () {
    });
};

/*
 Client gửi tin nhắn cho một client khác
 */
let onMessageEvent = function (socket, io) {
    socket.on(EVENT_MESSAGE, function (msg) {
        // store chat
        io.emit(EVENT_MESSAGE, msg);
    });
};

/*
 Create chat
 */
function createChat(socket) {
    let query = JSON.parse(socket.handshake.query.data);
    let chat = query.chat;
    chatRepo.createChat(chat);
}