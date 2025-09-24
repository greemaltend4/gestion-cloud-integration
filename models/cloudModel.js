const mongoose = require('mongoose');

const cloudServiceSchema = new mongoose.Schema({
    name: String,
    type: String,
    status: String
});

module.exports = mongoose.model('CloudService', cloudServiceSchema);
