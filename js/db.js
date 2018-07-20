 
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

var getMessages = firebase.database().ref("mensagens").orderByKey();

getMessages.once("value")
    .then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var name = childSnapshot.val().name;            
            var mensagem = childSnapshot.val().message;
            var data = childSnapshot.val().date;
            
            document.getElementById('titulo').innerHTML = '</br><span id="nome"></span> - <span id="data"></span>';
            document.getElementById('nome').innerHTML = name;
            document.getElementById('data').innerHTML = data;
            
            console.log(name);
        });
    });

    
