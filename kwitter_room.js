// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyArOgwsHmebnflqNQHWvjBSeLPGCUV-D1k",
    authDomain: "kwitter-8f8be.firebaseapp.com",
    projectId: "kwitter-8f8be",
    storageBucket: "kwitter-8f8be.appspot.com",
    messagingSenderId: "350834717882",
    appId: "1:350834717882:web:7c58b577f72c98d85a7e83",
    measurementId: "G-51MEGM1B1D"
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");

document.getElementById("username2").innerHTML = "welcome "+ user_name +" ! ";

function add()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child (room_name) .update({
            purpose: "adding room name"
            });

            localStorage.setItem("room_name", room_name);
            window. location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
      localStorage.clear();
      window.location = "index.html";
}
