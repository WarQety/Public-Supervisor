const mongoose = require("mongoose");

module.exports = mongoose.model("hayp034_extramute", new mongoose.Schema({
    user: String, 
    array: Array
}));