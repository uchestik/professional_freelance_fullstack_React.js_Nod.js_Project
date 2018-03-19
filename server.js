const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const cors = require('cors');
require('./model/slider');
require('./model/aboutUs');
require('./model/image');
require('./model/service');
require('./model/project')

mongoose.connect('mongodb://uchestik:abcdefgh1234@ds229418.mlab.com:29418/chineye-project-dev');

app.use(bodyParser.json())
app.use(cors())



require('./routes/sliderRoutes')(app);
require('./routes/aboutUsRoutes')(app);
require('./routes/serviceRoutes')(app);
require('./routes/imageRoutes')(app);
require('./routes/projectRoutes')(app);


if(process.env.NODE_ENV === 'production'){
    //express will serve up production assets 
    //like main.js or main.css
    app.use(express.static('client/build'));

    //express will serve up index.html file if it does not 
    //recognize the route
    //if route is not in required,express.static then serve up index.html
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
    })

}



app.listen(5000,()=>{
    console.log('app is officially running')
})