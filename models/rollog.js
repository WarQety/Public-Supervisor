const mongoose = require("mongoose");

module.exports = mongoose.model("hayp034_roller", new mongoose.Schema({
    user: String, 
    roller: Array
}));
