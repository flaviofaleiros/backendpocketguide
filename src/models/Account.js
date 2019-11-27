const mongoose = require('mongoose');

const AccountScheme = new mongoose.Schema({
    description: String
});

module.exports = mongoose.model('account', AccountScheme);