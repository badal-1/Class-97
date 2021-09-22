var firebaseConfig = {
    apiKey: "AIzaSyBsGoR_H_zBqdIR1ZizXbX8badMILjja2c",
    authDomain: "project-storage-93.firebaseapp.com",
    databaseURL: "https://project-storage-93-default-rtdb.firebaseio.com",
    projectId: "project-storage-93",
    storageBucket: "project-storage-93.appspot.com",
    messagingSenderId: "1072830981583",
    appId: "1:1072830981583:web:0789000002cc2670d9deba",
    measurementId: "G-Z6GVHV9NZ8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser (){
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}