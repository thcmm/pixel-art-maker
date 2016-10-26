/* Pixel drawPad ****************************************************\
* Author: T.Sarkisian                                                *
* Date: Unknown but likely sometime in the early Darker Days of g36  *
\ *******************************************************************/


/* 2DO: More than one can imagine
* - Axe the global theInkColor
* - Change cursor type
* - Change button onClick color or border color when clicked
* - Continuous draw mode
* - Track mouseX, mouseY
* - Add annoying sound effects
* SOMEDAY:
* - store clicked locations and draw color, save, redraw
*/

"use strict";
console.log("gridCtrl.js loaded");
var theInkColor = "black"; /* Globals can be dat'purty - even so, get rid of this!!! */
/* TO:DO Dynamic button generator makeColorButtons(); */
createDrawArea(2553);
updateActiveColorFrame("black");

/* Plot drawPad */
function createDrawArea (gridResolution) {
  for (var i = 1; i < gridResolution; i++) {
    var pixArea = document.createElement("div");
    document.getElementById("main").appendChild(pixArea);
    // pixArea.innerText = i; fill text
    pixArea.class = "drawPad";
    pixArea.addEventListener("click", drawInkColor);
    // document.getElementById("main").appendChild(pixArea);
  }
}

// SKRIV!!!
function drawInkColor() {
    event.target.style.backgroundColor = theInkColor;
}

// Update Ink Color
function changeInkColor(theColor) {
  var newColor = theColor;
  console.log(newColor + " yeat boo");
}

// TESTER
function handle(e) {
  alert(e.type);
}
/* Evental dynamic button generator
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
*/


// Update frame color to reflect active ink color
function updateActiveColorFrame(frameColor) {
  // var theFrameC = frameColor;
  // console.log(theFrameC);
  var el = document.getElementById("mainContainer");
  el.style.backgroundColor = frameColor;
}

// START : UpDate Pen Color
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

// END : UpDate Pen Color

// START : Clear DrawPad
function mClearD(obj) {
    console.log("btn:ClearDown");
}

function mClearU(obj) {
  console.log("btn:ClearUp");
  window.location.reload();
}
// END : Clear DrawPad



/* Grid by div
pixArea = document.createElement("div");
    document.getElementById("main").appendChild(pixArea);
    pixArea.id = "gridArea";
    pixArea.cssText = "position:static;float:left;height:10px;width:10px;background:#ddd;"
    document.getElementById("main").appendChild(pixArea);
*/
