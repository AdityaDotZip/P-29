class Box {
  constructor(x, y){
    var options={
      restitution: 0.3,
      friction: 1,
      density:1.0
    }

    this.body = Matter.Bodies.rectangle(x, y, 30, 40,options);

    World.add(world, this.body);
  }

  display(){
    fill("green");
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, 30, 40);
  }
}