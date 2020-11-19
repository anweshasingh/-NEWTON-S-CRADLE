class Rope {
    constructor (bodyA, bodyB, offsetX, offsetY) { 
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA, 
            bodyB: bodyB,
            length: 10, 
            stiffness: 0.04 
        }
        this.rope = Matter.Constraint.create(options); 
        World.add(world,this.rope); 
    }

    display () {
        var pointA = this.rope.bodyA.position; 
        var pointB = this.rope.bodyB.position; 

        var a1X = pointA.x;
        var a1Y = pointA.y;

        var a2X = pointA.x;
        var a2Y = pointB.y;

        line(a1X, a1Y, a2X, a2Y); 
    }
}