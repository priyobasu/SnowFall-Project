class Snow {
    constructor(x,y,dia) {
      var options = {
          restitution:0.5
      }
       this.radius=dia/2;
      
      this.body = Bodies.circle(x,y,this.radius,options);
      this.snow=loadImage("snow4.webp");

      World.add(world, this.body);
     
    }
    display(){
         var pos =this.body.position;
   var angle=this.body.angle;
       
      push();
    translate(pos.x, pos.y);
    rotate(angle);
      imageMode(CENTER);
    
      image(this.snow,0,0, this.radius,this.radius);
     pop();
    }
  }