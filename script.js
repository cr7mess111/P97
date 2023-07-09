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






function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "room.html"
}