const firebaseConfig = {
    apiKey: "AIzaSyB8H1UJFWVLnq_rf3nWKS5-w8Gap3LCVlY",
    authDomain: "lets-chat-a9042.firebaseapp.com",
    databaseURL: "https://lets-chat-a9042-default-rtdb.firebaseio.com",
    projectId: "lets-chat-a9042",
    storageBucket: "lets-chat-a9042.appspot.com",
    messagingSenderId: "727646701027",
    appId: "1:727646701027:web:1d30553585b0165de18cd6"
  };

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
