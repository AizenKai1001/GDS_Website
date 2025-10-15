console.log("Script Loaded");

// set default mouse pos 
var mousePos = { x: undefined, y: undefined };

//get button vars
console.log(document)
var lineBtn = document.getElementById("line");
var circleBtn = document.getElementById("circle");
var starBtn = document.getElementById("star");
var pentagonBtn = document.getElementById("pentagon");
var squareBtn = document.getElementById("square");

//event listeners
//get mouse pos
lineBtn.addEventListener("click", function(){
    console.log("clicked line")
    getMousePos()
    console.log(`clicked and got mouse pos. Mouse X & Y: ${mousePos}`)
})

//functions
//get mouse pos
function getMousePos(event){
    document.addEventListener('mousemove', function(event){
    }
)}

// get canvas vars
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");