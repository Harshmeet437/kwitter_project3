// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3DxmyAnDbBgVWOCGdDJnEzRRwT3yDMuk",
  authDomain: "kwitter-943a9.firebaseapp.com",
  databaseURL: "https://kwitter-943a9-default-rtdb.firebaseio.com",
  projectId: "kwitter-943a9",
  storageBucket: "kwitter-943a9.appspot.com",
  messagingSenderId: "232264078484",
  appId: "1:232264078484:web:0288820a6177919f3b9081"
};
    
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
