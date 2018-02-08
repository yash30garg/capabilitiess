import {markup} from "./templates/butt.js"
document.body.innerHTML= markup;
// create();
// document.getElementById("data");

var button=document.getElementById("button");

button.addEventListener("click", getData);

function getData(){ document.getElementById("res").innerHTML = "yes i'm called"};








