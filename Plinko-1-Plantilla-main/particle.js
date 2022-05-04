class Particles {
    constructor(x,y){
     var options={
         friction:0.001,
         restitution:0.01
     }
     this.body = Bodies.circle(x,y,8,options);
     this.radius = 8;
     this.color=color(random(0,255), random(0,255), random(0,255));
     World.add(this.body);
     
    }
 display(){
     fill(this.color);
     ellipseMode(CENTER);
     ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
 }
}