class Box{
    constructor(x,y){
        this.box=Matter.Bodies.rectangle(x,y,100,100);
        Matter.World.add(world,this.box);
    }
    display(){
        fill("white");
        rect(this.box.position.x,this.box.position.y,100,100);
    }
    
}