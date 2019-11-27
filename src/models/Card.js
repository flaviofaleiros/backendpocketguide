const mongoose = require('mongoose');

const CardScheme = new mongoose.Schema({
    description: String,
});

module.exports = mongoose.model('card', CardScheme);