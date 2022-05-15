const mongoose = require("mongoose");

module.exports = mongoose.model("hayp034_yasaklıtag", new mongoose.Schema({
    guild: String,
  taglar: Array
}));