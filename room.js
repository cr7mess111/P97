var firebaseConfig = {
    apiKey: "AIzaSyC1wltXArCxybik_l7I8KjoMWKlUJukvak",
  authDomain: "hunger-95e19.firebaseapp.com",
  databaseURL: "https://hunger-95e19-default-rtdb.firebaseio.com",
  projectId: "hunger-95e19",
  storageBucket: "hunger-95e19.appspot.com",
  messagingSenderId: "482998038828",
  appId: "1:482998038828:web:c25530e422cf464b0b3c89"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "hunger_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_name);
   row = "<div class = 'room name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "hunger_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "index.html"
}