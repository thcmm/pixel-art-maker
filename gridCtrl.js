
/* Creating a div element */
"use strict";
console.log("gridCtrl.js loaded");
var theInkColor = "black";
makeColorButtons();
createDrawArea(2553);


function createDrawArea (gridResolution) {
  for (var i = 1; i < gridResolution; i++) {
    /* Grid by li */
    var pixArea = document.createElement("div");
    document.getElementById("main").appendChild(pixArea);
    // pixArea.innerText = i; fill text
    pixArea.class = "drawPad";
    pixArea.addEventListener("click", drawInkColor);
    // document.getElementById("main").appendChild(pixArea);
  }
}


function drawInkColor() {
    // console.log(newColor + " boo hoo");
    event.target.style.backgroundColor = theInkColor;
}


function changeInkColor(theColor) {
  var newColor = theColor;
  console.log(newColor + " yeat boo");
}

function handle(e) {
  alert(e.type);
}

function makeColorButtons() {
// create div
var divElement = document.createElement("Div");
divElement.id = "aDiv";
// Adding buttons
var button = document.createElement("Button");
var textForButton = document.createTextNode("Blue");
button.appendChild(textForButton);
button.addEventListener("click", changeInkColor("blue"));
divElement.appendChild(button);
}

function updateActiveColorFrame(frameColor) {
  // var theFrameC = frameColor;
  // console.log(theFrameC);
  var el = document.getElementById("mainContainer");
  el.style.backgroundColor = frameColor;
  // el.style.background-color = frameColor;
}




function mBlackD(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Black";
    // obj.getElementById;
    theInkColor = "black";

}

function mBlackU(obj) {
  obj.style.backgroundColor = "black";
  updateActiveColorFrame("black");
}

function mBlueD(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Blue";
    // obj.getElementById;
    theInkColor = "blue";
}
function mBlueU(obj) {
  obj.style.backgroundColor = "blue";
  updateActiveColorFrame("blue");
}

function mGreenD(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Green";
    // obj.getElementById;
    theInkColor = "green";
}
function mGreenU(obj) {
  obj.style.backgroundColor = "green";
  updateActiveColorFrame("green");
}

function mRedD(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Red";
    // obj.getElementById;
    theInkColor = "red";
}

function mRedU(obj) {
  obj.style.backgroundColor = "red";
  updateActiveColorFrame("red");
}

/* ADD more colors
function mOrangeD(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "orange";
    // obj.getElementById;
    theInkColor = "orange";
}

function mUp(obj) {
    obj.style.backgroundColor="orange";
    obj.innerHTML="Orange";
}
*/






/* Grid by div
pixArea = document.createElement("div");
    document.getElementById("main").appendChild(pixArea);
    pixArea.id = "gridArea";
    pixArea.cssText = "position:static;float:left;height:10px;width:10px;background:#ddd;"
    document.getElementById("main").appendChild(pixArea);
*/
