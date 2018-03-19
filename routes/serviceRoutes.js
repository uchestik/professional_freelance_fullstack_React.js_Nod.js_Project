const mongoose = require('mongoose');
const Service = mongoose.model('service');
var sanitizer = require('sanitizer')

module.exports = (app)=>{
    app.get('/api/allservices', function(req,res){
        Service.find({}, function(err,services){
            if(err){
                console.log(err);
            }else{
                res.json(services)
            }
        })
    })

    app.get('/api/service/:id', function(req,res){
        Service.findById(req.params.id).populate('images').exec(function(err, service){
            if(err){
                console.log(err);
            }else{
                res.json(service);
            }
        })
    })

    app.post('/api/service', function(req,res){
       var name = sanitizer.sanitize(req.body.name);
       var summary = sanitizer.sanitize(req.body.summary);
       var summaryImage = sanitizer.sanitize(req.body.summaryImage);
       var description1 = sanitizer.sanitize(req.body.description1);
       var description2 = sanitizer.sanitize(req.body.description2);
       var description3 = sanitizer.sanitize(req.body.description3);
       var service = {name:name,summary:summary,summaryImage:summaryImage,
        description1:description1,description2:description2,description3:description3};

        Service.create(service, function(err,newService){
            if(err){
                console.log(err);
            }else{
                res.json(newService); 
            }
        })

    })

    app.put('/api/service/:id', function(req,res){
        var name = sanitizer.sanitize(req.body.name);
       var summary = sanitizer.sanitize(req.body.summary);
       var summaryImage = sanitizer.sanitize(req.body.summaryImage);
       var description1 = sanitizer.sanitize(req.body.description1);
       var description2 = sanitizer.sanitize(req.body.description2);
       var description3 = sanitizer.sanitize(req.body.description3);
       var service = {name:name,summary:summary,summaryImage:summaryImage,
        description1:description1,description2:description2,description3:description3};

        Service.findByIdAndUpdate(req.params.id, service, function(err,updatedService){
            if(err){
                console.log(err);
            }else{
                res.json(updatedService);
            }
        })
    })

    app.delete('/api/service/:id',function(req,res){
        Service.findByIdAndRemove(req.params.id, function(err,deletedService){
            if(err){
                console.log(err);
            }else{
                res.json(deletedService);
            }
        })
    })












}