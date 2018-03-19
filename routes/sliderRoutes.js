const mongoose = require('mongoose');
const HomeSlider = mongoose.model('homeSlider');
var sanitizer = require('sanitizer');

module.exports = (app) =>{
    app.get('/api/homeslider', function(req,res){
        HomeSlider.find({}, function(err, sliderItems){
            if(err){
                console.log(err);
            }else{
                res.json(sliderItems);
            }
        })
    });

    app.get('/api/homeslider/:id', function(req,res){
        HomeSlider.findById(req.params.id, function(err,slider){
            if(err){
                console.log(err);
            }else{
                res.json(slider);
            }
        })
    })


    app.post('/api/homeslider', function(req,res){
        const image =sanitizer.sanitize(req.body.image);
        const headline =sanitizer.sanitize(req.body.headline);
        const message =sanitizer.sanitize(req.body.message);
        const newSliderItem ={image:image, headline:headline, message:message};

        HomeSlider.create(newSliderItem, function(err, newSlider){
            if(err){
                console.log(err);
            }else{
                res.json(newSlider);
            }
        })
    })

    app.put('/api/homeslider/:sliderId', function(req,res){
        const image =sanitizer.sanitize(req.body.image);
        const headline =sanitizer.sanitize(req.body.headline);
        const message =sanitizer.sanitize(req.body.message);
        const newSliderItemEdit ={image:image, headline:headline, message:message};

        HomeSlider.findByIdAndUpdate(req.params.sliderId, newSliderItemEdit, function(err, editedSlider){
            if(err){
                console.log(err);
            }else{
                res.json(editedSlider);
            }
        })
    })

    app.delete('/api/homeslider/:sliderId', function(req,res){
        HomeSlider.findByIdAndRemove(req.params.sliderId, function(err,deletedSlider){
            if(err){
                console.log(err);
            }else{
                res.json(deletedSlider);
            }
        })
    })






}