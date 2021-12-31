
var firebaseConfig = {
    apiKey: "AIzaSyAbIlq2d5UeqDhIwyBNCGt3FEAKSur13Go",
    authDomain: "project-c-94-97c82.firebaseapp.com",
    projectId: "project-c-94-97c82",
    storageBucket: "project-c-94-97c82.appspot.com",
    messagingSenderId: "1038759531692",
    appId: "1:1038759531692:web:eb4db1407106acc10b3b09",
    measurementId: "G-S88MDKBYKJ"
  };
  
  // Initialize Firebase
  firebaseConfig.initializeApp(firebaseConfig);
  function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    }