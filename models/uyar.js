const mongoose = require("mongoose");

module.exports = mongoose.model("hayp034_uyarılar", new mongoose.Schema({
   user: String,
   uyarılar: Array,
}));