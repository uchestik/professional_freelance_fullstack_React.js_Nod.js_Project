const mongoose = require('mongoose');

const homeSliderSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    headline:{
        type:String,
        required:true
    },
    message:String

})

module.exports = mongoose.model('homeSlider', homeSliderSchema);