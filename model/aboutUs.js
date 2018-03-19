const mongoose = require('mongoose');

var aboutUsSchema = mongoose.Schema({
    header:String,
    paragraph1:String,
    paragraph2:String    
})

module.exports = mongoose.model('aboutus', aboutUsSchema);