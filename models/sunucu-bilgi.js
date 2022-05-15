const mongoose = require("mongoose")

const hayp034_sunucu = new mongoose.Schema({
   guild: String,
   ihlal: Number
})

module.exports = mongoose.model("hayp034_sunucu", hayp034_sunucu)