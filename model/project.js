const mongoose = require('mongoose')
const {Schema} = mongoose;

var projectSchema = new Schema({
    name:String,
    location:String,
    date:String,
    description1:String,
    description2:String,
    description3:String,
    images:[{
            type:Schema.Types.ObjectId,
            ref:'image' 
    }],
    created: {type : Date, default : Date.now}

})

module.exports = mongoose.model('project', projectSchema);