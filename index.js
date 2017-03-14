var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/app'));

app.get('/',function(req,res){
    res.sendfile('app/index.html',{root:__dirname})
});

var server_host = (process.env.HOST || 'localhost'),
    server_port = (process.env.PORT || 8100);
    
app.listen(process.env.PORT || 8100);
console.log('App listening on port : ' +  server_host + ' ' + server_port);