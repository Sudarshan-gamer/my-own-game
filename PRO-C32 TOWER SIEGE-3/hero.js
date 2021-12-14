class hero{
    constructor(x,y){
        var options = {
            isStatic:false
        }
    this.body = Bodies.rectangle(x,y,120,120,options)
    
    World.add(world,this.body)
    
    this.image = loadImage("mob.png")

}
  show(){
      var pos = this.body.position;

      pos.x = mouseX;
      pos.y = mouseY;

      image(this.image,pos.x,pos.y,120,120);
  }
}