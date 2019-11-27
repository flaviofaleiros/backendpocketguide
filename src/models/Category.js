const mongoose = require('mongoose');

const CategoryScheme = new mongoose.Schema({
    description: String
});

module.exports = mongoose.model('category', CategoryScheme);