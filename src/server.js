const express = require('express'); 
const socket = require('socket.io');
const api = require('./api.js');
const components = new Array("liveBar","logo","lokalizacja","belka","program","scroll","belkaObrazek");
var app = express();
var server = app.listen(8000,() => {
    console.log("Listen port 8000");
});
app.use(express.static('public'));
var io = socket(server); 
io.on('connection',(socket) =>{
    console.log("Połączono: "+socket.id+""+socket.request.connection.remoteAddress);
    socket.on('componentsObject',(info) =>{
            for(var i = 0; i < components.length;i++){
                    const compOBJ = api.wigets[components[i]];
                    if(info.data == "true"){
                            if(info.destinationTekst !== "NULL"){
                                if(components[i] == info.dataName ){
                                    api.main.changeValue(components[i],info.destinationTekst,info.value);
                                    const compOBJ = api.wigets[components[i]];
                                    sendTo(1,compOBJ);
                                }  
                            }   
                    }
                if(info.id == api.wigets[components[i]].id[0]){
                    api.main.changeValue(components[i],"enabled",!api.main.getValue(components[i],"enabled"));
                    sendTo(0,compOBJ);
                }
                
            }
            
    });
    function sendTo(type,value){
        switch(type){
            case 0:
                io.sockets.emit("layoutObj",value);
                break;
            case 1:
                io.sockets.emit("layoutObj",value);
                break;
        }
    }
});

