const mongoose = require('mongoose');

const PocketGuideSchema = new mongoose.Schema({

    date: String,
    hour: String,
    type: String,
    description: String,
    money: Number,
    paymenttype: String,
    notes: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        account: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'account',
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category',
        },
        card: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'card'
        }
});

module.exports = mongoose.model('pocketGuide', PocketGuideSchema);     