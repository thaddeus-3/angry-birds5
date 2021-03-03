class slingshot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 100
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly() {
        this.slingshot.bodyA = null
    }
    display() {
        if(this.slingshot.bodyA) {
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
 
    }
}
