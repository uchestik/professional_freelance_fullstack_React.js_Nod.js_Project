const mongoose = require('mongoose');
const Service = mongoose.model('service');
const Image = mongoose.model('image');
var sanitizer = require('sanitizer');
const Project = mongoose.model('project');


module.exports = (app)=>{

app.post('/api/image/service/:serviceId', function(req,res){
    var image = sanitizer.sanitize(req.body.image);
    var location = sanitizer.sanitize(req.body.location);
    var date = sanitizer.sanitize(req.body.date);
    var caption = sanitizer.sanitize(req.body.caption);
    var imagePost = {image:image, location:location, date:date, caption:caption};

    Service.findById(req.params.serviceId, function(err,foundService){
        if(err){
            console.log(err);
        }else{
            Image.create(imagePost, function(err,newImage){
                if(err){
                    console.log(err);
                }else{
                    // console.log(foundService)
                    
                    Service.findByIdAndUpdate(
                        req.params.serviceId,
                        {$push:{images:newImage}},
                        function(err, updated){
                            if(err){
                                console.log(err);
                            }else{
                                newImage.save()
                                res.json(newImage);
                            }
                        }
                    )
                    
                }

            })
        }
    })  
})

app.post('/api/image/project/:projectId', function(req,res){
    var image = sanitizer.sanitize(req.body.image);
    var location = sanitizer.sanitize(req.body.location);
    var date = sanitizer.sanitize(req.body.date);
    var caption = sanitizer.sanitize(req.body.caption);
    var imagePost = {image:image, location:location, date:date, caption:caption};

    Project.findById(req.params.projectId, function(err,foundProject){
        if(err){
            console.log(err);
        }else{
            Image.create(imagePost, function(err,newImage){
                if(err){
                    console.log(err);
                }else{
                    // console.log(foundService)
                    
                    Project.findByIdAndUpdate(
                        req.params.projectId,
                        {$push:{images:newImage}},
                        function(err, updated){
                            if(err){
                                console.log(err);
                            }else{
                                newImage.save()
                                res.json(newImage);
                            }
                        }
                    )
                    
                }

            })
        }
    })  
})

app.put('/api/image/edit/:imageId', function(req,res){
    var image = sanitizer.sanitize(req.body.image);
    var location = sanitizer.sanitize(req.body.location);
    var date = sanitizer.sanitize(req.body.date);
    var caption = sanitizer.sanitize(req.body.caption);
    var imagePost = {image:image, location:location, date:date, caption:caption};

    Image.findByIdAndUpdate(req.params.imageId, imagePost, function(err,updatedImage){
        if(err){
            console.log(err);
        }else{
            res.json(updatedImage);
        }
    })
})

app.delete('/api/image/delete/:imageId', function(req,res){
    Image.findByIdAndRemove(req.params.imageId, function(err,deletedImage){
        if(err){
            console.log(err);
        }else{
            res.json(deletedImage);
        }
    })
})






}