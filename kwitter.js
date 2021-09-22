function adduser(){
user_name=document.getElementById("user_name").value;
//name stored
localStorage.setItem("user_name",user_name);
//sent to local storage
window.location="kwitter_room.html";
//navigated
}