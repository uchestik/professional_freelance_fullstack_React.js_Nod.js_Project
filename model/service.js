const mongoose = require('mongoose')
const {Schema} = mongoose;

var serviceSchema = new Schema({
    name:String,
    summaryImage:String,
    summary:String,
    description1:String,
    description2:String,
    description3:String,
    images:[{
            type:Schema.Types.ObjectId,
            ref:'image' 
    }]

})

module.exports = mongoose.model('service', serviceSchema);