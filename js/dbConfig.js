 
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
var content = getMessages;

function readMessages(){
    
    getMessages.once("value")
        .then(function(snapshot){
            snapshot.forEach(function(childSnapshot){            
                return childSnapshot.val();    
            });        
        });     
        
}
