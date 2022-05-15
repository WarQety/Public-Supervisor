const mongoose = require("mongoose");

module.exports = mongoose.model("hayp034_kullanıcı", new mongoose.Schema({
    id: { type: String }, 
    tarih: { type: Number, default: 0},
    sebep: { type: String, default: null},
}));