const EVENT_CONNECTION = 'connection';
const EVENT_DISCONNECT = 'disconnect';
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
    let data = JSON.parse(socket.handshake.query.data);
    let channel = 'message_' + data.customer.id + '_' + data.trainer.id;

    socket.on(channel, function (msg) {
        // store chat
        createChat(data, msg);

        io.emit(channel, msg, data.sender);
    });
};

/*
 Create chat
 */
function createChat(data, msg) {
    let chat = {
        customer_id: data.customer.id,
        trainer_id: data.trainer.id,
        type: 'text',
        content: msg,
        sender: data.sender
    };

    chatRepo.createChat(chat);
}