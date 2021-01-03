class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.catapult1 = loadImage("sprites/sling1.png")
        this.catapult2 = loadImage("sprites/sling2.png")
        this.catapult3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.catapult1,200,20)
        image(this.catapult2,170,20)


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x-25, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+40,pointB.y);
            image(this.catapult3,pointA.x-30,pointA.y-10,30,15)

        }
    }
    
}