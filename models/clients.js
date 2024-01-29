const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  ClientCode: {
    type: String,
    required: true
  },
  linkedContacts: {
    type: Array,
    default: [],
  }
});


module.exports = mongoose.model("Client", ClientSchema);
