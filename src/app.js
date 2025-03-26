import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const iconsObjectsArrays = [{icon:"♦",color:"red"},{icon:"♥",color:"red"},{icon:"♠",color:"black"},{icon:"♣",color:"black"}]

  let randomNumberSuite = Math.floor( Math.random() * iconsObjectsArrays.length )

  let randomNumberCard = Math.floor( Math.random() * 12 )

  let iconObjectWinner = iconsObjectsArrays[randomNumberSuite]

  let iconWinner = iconObjectWinner.icon

  let spanNumberElement = document.getElementById("random-number")
  let iconSpansNodeList = document.querySelectorAll(".icon-span")

  for(let spanNode of iconSpansNodeList){
    spanNode.style.color = iconObjectWinner.color
    spanNode.style.fontSize= "100px"
    spanNode.innerHTML = iconWinner
   }

   spanNumberElement.innerHTML = randomNumberCard

};
