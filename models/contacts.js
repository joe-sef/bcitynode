const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    Name: 
    {
        type: String,
        required: true,
    },
    Surname: 
    {
        type: String,
        required: true,
    },
    EmailAddress: 
    {
        type: String,
        required: true
    },
    linkedClients: 
    {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("Contact", ContactSchema);
