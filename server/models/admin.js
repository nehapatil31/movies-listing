const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    id: { type: String }
})

module.exports = mongoose.model('Admin', useSchema);