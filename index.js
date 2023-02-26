/*
    HOLY
    MOLY
*/

let username;

document.getElementById("myButton").onClick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}