var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/app'));

app.get('/',function(req,res){
    res.sendfile('app/index.html',{root:__dirname})
});

app.listen(8100);
console.log("App listening on port 8100")