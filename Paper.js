class Paper{

    constructor(x,y,raidus){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:1.0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,raidus,options)
        this.raidus=raidus;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        ellipse(0,0,this.raidus,this.raidus)
        pop();
      }
    
}