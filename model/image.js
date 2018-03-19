const mongoose = require('mongoose')
const {Schema} = mongoose;

var imageSchema = new Schema({
    image:String,
    caption:String,
    location:String,
    date:String,
    

})

module.exports = mongoose.model('image', imageSchema);