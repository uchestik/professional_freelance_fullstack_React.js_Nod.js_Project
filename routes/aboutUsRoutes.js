const mongoose = require('mongoose');
const AboutUs = mongoose.model('aboutus');
var sanitizer = require('sanitizer')

module.exports = (app)=>{
    app.get('/api/aboutus', function(req,res){
        AboutUs.find({}, function(err,about){
            if(err){
                console.log(err);
            }else{
                res.json(about);
            }
        })
    })

    app.get('/api/aboutus/:id', function(req,res){
        AboutUs.findById(req.params.id, function(err,about){
            if(err){
                console.log(err);
            }else{
                res.json(about);
            }
        })
    })

    app.post('/api/aboutus', function(req,res){
        const header = sanitizer.sanitize(req.body.header);
        const paragraph1 = sanitizer.sanitize(req.body.paragraph1);
        const paragraph2 = sanitizer.sanitize(req.body.paragraph2);
        const about = {header:header,paragraph1:paragraph1, paragraph2:paragraph2}

        AboutUs.create(about, function(err,newAbout){
            if(err){
                console.log(err);
            }else{
                res.send(newAbout);
            }
        })
    })

    app.put('/api/aboutus/:id', function(req,res){
        const header = sanitizer.sanitize(req.body.header);
        const paragraph1 = sanitizer.sanitize(req.body.paragraph1);
        const paragraph2 = sanitizer.sanitize(req.body.paragraph2);
        const about = {header:header,paragraph1:paragraph1, paragraph2:paragraph2}

        AboutUs.findByIdAndUpdate(req.params.id, about, function(err,editedAbout){
            if(err){
                console.log(err);
            }else{
                res.json(editedAbout);
            }
        })
    })

    app.delete('/api/aboutus/:id', function(req,res){
        AboutUs.findByIdAndRemove(req.params.id, function(err,deletedAbout){
            if(err){
                console.log(err);
            }else{
                res.json(deletedAbout);
            }
        })
    })
}