const moment = require('node-moment');

const mareDb = require('./database').mareConnection;
let insertChatQuery = "insert into `chats` ( `status`, `content`, `customer_id`, `trainer_id`, `chat_type`, `sender`, `created_at`, `updated_at`) values ( 'sent', ?, ?, ?, ?, ?, ?, ?)";
let getCustomerPointQuery = "select ";
exports.createChat = function (chat) {
    var currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    mareDb.query(insertChatQuery, [chat.content, chat.customer_id, chat.trainer_id, chat.type, chat.sender, currentTime, currentTime], function (err, result) {
        return result;
    });
};