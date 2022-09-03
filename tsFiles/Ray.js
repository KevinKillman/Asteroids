var Ray = /** @class */ (function () {
    function Ray() {
        this.length = 0;
        this.numberOfRays = 0;
    }
    Ray.prototype.draw = function (length, numberOfRays) {
        stroke(0, 200, 0);
        strokeWeight(2);
        this.length = length;
        this.numberOfRays = numberOfRays;
        var maus = createVector(mouseX, mouseY);
        var up = createVector(0, 1);
        up.mult(this.length);
        var times = this.numberOfRays;
        for (var i = 0; i <= times - 1; i++) {
            var ray = p5.Vector.sub(maus, up);
            line(maus.x, maus.y, ray.x, ray.y);
            up.rotate((1 / times) * 360);
        }
    };
    return Ray;
}());
