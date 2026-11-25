
const mongoose = require('mongoose');

const blacklisttokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 0
    }
});

module.exports = mongoose.model(
    'BlacklistToken',
    blacklisttokenSchema
);
