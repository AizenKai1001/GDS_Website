var fps = 60;
var timer = setInterval(main, 1000/fps)

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 50;
var y = canvas.height / 2 ;
var w = 100;
var h = 100;
var moveAmountX = 10;
var moveAmountY = 10;

var jimmyTheBox = new GameObject(canvas);
jimmyTheBox.x = 72;
jimmyTheBox.y = 84;
jimmyTheBox.width = 100;
jimmyTheBox.height = 100;

var paulTheSmallGuy = new GameObject(canvas);
paulTheSmallGuy.x = 100;
paulTheSmallGuy.y = 80;
paulTheSmallGuy.width = 20;
paulTheSmallGuy.height = 15;
paulTheSmallGuy.vx = 15;
var colors = ["yellow", "black", "blueviolet"]
var setColor = 0




function main(){

    //Clear the canvas every frame
    ctx.clearRect(0,0, canvas.width, canvas.height)


    jimmyTheBox.renderRect();
    jimmyTheBox.color = colors[setColor]
    jimmyTheBox.move();

    paulTheSmallGuy.renderRect();
    paulTheSmallGuy.color = colors[setColor]
    paulTheSmallGuy.move();


    x += moveAmountX;
    y += moveAmountY;

    //Draw the object
    ctx.fillStyle = "olive"

    ctx.beginPath();
    ctx.arc(x,y,50,0,2 * Math.PI);
    ctx.fill();

    //Stay inside the bounding box (canvas)

    if(x > canvas.width -50){
        moveAmountX *= -1
        setColor += 1
    }

    if(y > canvas.height -50){
        moveAmountY *= -1
        setColor += 1
    }

    if(x < + 50){
        moveAmountX *= -1
        setColor += 1
    }

    if(y < + 50){
        moveAmountY *= -1
        setColor += 1
    }

    if (setColor > colors.length){
        setColor = 0
    }
}
