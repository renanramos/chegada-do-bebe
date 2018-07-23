 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD-NO-Mj9ZJKlrejhPPFyi10uOI-9jpKwI",
    authDomain: "projectone-renanrramos.firebaseapp.com",
    databaseURL: "https://projectone-renanrramos.firebaseio.com",
    projectId: "projectone-renanrramos",
    storageBucket: "projectone-renanrramos.appspot.com",
    messagingSenderId: "139459063946"
};

firebase.initializeApp(config);
var database = firebase.database();

const ref = database.ref("mensagens");

//salva mensagens no banco de dados
function writeMessages(){

    var name = document.getElementById("inputName").value;
    var message = document.getElementById("inputMessage").value;    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

    ref.push({
        date: dd + '/' + mm + '/' + yy,
        message: message,
        name: name,
    });

}

//lê as mensagens e adiciona na página
function readMessages(){

    ref.on("value", function(data){
                
        let objKey = Object.keys(data.val()).reverse();

        for(obj in objKey){
            let key = objKey[obj];
            let mensagem = document.getElementById("mensagem");
            let modalTitulo = document.getElementById("modalTitle");
            let modalMessage =document.getElementById("modalMessage");

            mensagem.innerHTML += '<a href="#" class="list-group-item" data-toggle="modal" data-target="#modal"><b>' + data.val()[key].name + ' <span class="badge">' + data.val()[key].date + '</span></b></br>' +
                                    data.val()[key].message + '</a></br>';
            
            modalTitulo.innerHTML = data.val()[key].name + '  -  ' + data.val()[key].date;
            modalMessage.innerHTML = data.val()[key].message;
            
        }
                
    }, function(errorObject){
        a.innerHTML += '<a href="#"> A leitura do arquivo falhou. Codigo: ' + errorObject.code + '</a>';
    });       
}

readMessages();

