
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAoEHS4gEl50ph5Ufmv6aHMOtW3J09j7Zs",
  authDomain: "classtest-66c9f.firebaseapp.com",
  databaseURL: "https://classtest-66c9f-default-rtdb.firebaseio.com",
  projectId: "classtest-66c9f",
  storageBucket: "classtest-66c9f.appspot.com",
  messagingSenderId: "172173432530",
  appId: "1:172173432530:web:2c4f14819b1c8fe512bf0b"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    


    user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome, "+user_name;


    function addRoom() {
      room_name = document.getElementById("room_name").value;

     localStorage.setItem("Roomname",room_name);
 
     window.location = "";

     firebase.database().ref("/").child(room_name).update({
           purpose: "Adding Room Name"
     });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
