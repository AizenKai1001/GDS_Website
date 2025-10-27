class GameObject{

    constructor(canvas){
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;

        this.vx = 10;
        this.vy = 10;
        
        this.color = "black"
        
        this.canvas = canvas

    }


    renderRect(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y , this.width, this.height)
    }

    move(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.x > canvas.width -50){
            this.vx *= -1
        }
    
        if(this.y > canvas.height -50){
            this.vy *= -1
        }
    
        if(this.x < + 50){
            this.vx *= -1
        }
    
        if(this.y < + 50){
            this.vy *= -1
        }
    
    }


}