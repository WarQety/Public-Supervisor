const mongoose = require("mongoose");

module.exports = mongoose.model("hayp034_notlar", new mongoose.Schema({
    user: { type: String }, 
    notlar: {type: Array }
}));