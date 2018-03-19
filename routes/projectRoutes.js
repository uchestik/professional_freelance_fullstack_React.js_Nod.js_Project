const mongoose = require('mongoose');
const Project = mongoose.model('project');
const sanitizer = require('sanitizer')

module.exports = (app) =>{

    app.get('/api/projects', function(req,res){
        Project.find({}, function(err, projects){
            if(err){
                console.log(err);
            }else{
                res.json(projects);
            }
        })
    })

    app.get('/api/project/:projectId', function(req,res){
        Project.findById(req.params.projectId).populate('images').exec(function(err, project){
            if(err){
                console.log(err);
            }else{
                res.json(project);
            }
        })
    })

    app.post('/api/project/new', function(req,res){
        var name = sanitizer.sanitize(req.body.name);
        var location = sanitizer.sanitize(req.body.location);
        var date = sanitizer.sanitize(req.body.date);
        var description1 = sanitizer.sanitize(req.body.description1);
        var description2 = sanitizer.sanitize(req.body.description2);
        var description3 = sanitizer.sanitize(req.body.description3);
        var project = {name:name,location:location,date:date,
            description1:description1,description2:description2,
            description3:description3};

        Project.create(project, function(err, newProject){
            if(err){
                console.log(err);
            }else{
                res.json(newProject)
            }
        })
    })

    app.put('/api/project/edit/:projectId', function(req,res){
        var name = sanitizer.sanitize(req.body.name);
        var location = sanitizer.sanitize(req.body.location);
        var date = sanitizer.sanitize(req.body.date);
        var description1 = sanitizer.sanitize(req.body.description1);
        var description2 = sanitizer.sanitize(req.body.description2);
        var description3 = sanitizer.sanitize(req.body.description3);
        var project = {name:name,location:location,date:date,
            description1:description1,description2:description2,
            description3:description3};

        Project.findByIdAndUpdate(req.params.projectId, project, function(err, editedProject){
            if(err){
                console.log(err);
            }else{
               res.json(editedProject)
            }
        })
    })

    app.delete('/api/project/delete/:projectId', function(req,res){
        Project.findByIdAndRemove(req.params.projectId, function(err,deletedProject){
            if(err){
                console.log(err);
            }else{
                res.json(deletedProject);
            }
        })
    })

}