const mareDb = require('./database').mareConnection;
let createChatStateQuery = "insert into `chats` ( `status`, `content`, `customer_id`, `trainer_id`, `chat_type`) values ( 'sent', ?, ?, ?, ?)";


exports.createChat = function (chat) {
    mareDb.query(createChatStateQuery, [chat.content, chat.customer_id, chat.trainer_id, chat.type], function (err, result) {
        console.log("Chat added");
    });
};