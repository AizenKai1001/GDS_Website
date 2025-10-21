console.log("Script Loaded")

var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var person ={
    first: "Jan",
    last: "Espinal",

    firstAndLastName: function(){
        alert(`My name is: ${this.first} ${this.last}`)
    }
}
console.log(person.first)

var square ={
    x: 500,
    y: 500,
    width: 100,
    height: 100,
    color: "red",
}

var copy = square;
copy.x = 200;

ctx.fillStyle = square.color
ctx.fillRect(square.x, square.y, square.width, square.height)

//for loops
for(var i = 0; i <5; i++){
    ctx.fillStyle = "red"
    ctx.fillRect(i * 5 * 20, i, 20, 20)
}

var colors = []
colors[0] = "red"
colors[1] = "olive"
colors[2] = "yellow"

console.log(colors[1])

var twoDArray =[
    [1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4],
]

//All arrays have a length param attached to them, which
//tells the programmer how many objects are in the array
for(var x = 0; x < twoDArray.length; x++){

    //accessing the value within the array
    console.log(twoDArray[x][4])
}

//Double for loop
for(var xCord = 0; xCord < twoDArray.length; xCord++)
{
    for(var yCord = 0; yCord < 8; yCord++)
    {
        console.log(twoDArray[xCord][yCord])
    }
}