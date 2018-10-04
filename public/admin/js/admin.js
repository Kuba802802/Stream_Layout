var socket = io.connect('http://212.91.16.181:8000');
var dataObj;
socket.on("dataVar",(data) => {
        dataObj = data;
});
document.querySelectorAll('button').forEach(click => click.addEventListener("click",(e) =>{
        const cel = e.target;
        const id = cel.id;
        const data = cel.attributes.getNamedItem('data-text').value;
        const destTekstAPI = cel.attributes.getNamedItem('data-destText').value;
        const allTextBox = document.querySelectorAll("input[type=text]")
        if(data === "true"){
                var nameAPI = cel.attributes.getNamedItem('data-name').value;
                for(var i = 0; i < allTextBox.length;i++){
                        if(allTextBox[i].attributes.getNamedItem('data-destText').value == destTekstAPI){
                                var txt = allTextBox[i].value;
                        }
               }
        }
        var info = {
                id: id,
                data: data,
                destinationTekst: destTekstAPI,
                dataName: nameAPI,
                value: txt
        };
        console.log(info);
        socket.emit("componentsObject",info);
}));

    
