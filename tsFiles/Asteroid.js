var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Asteroid = /** @class */ (function (_super) {
    __extends(Asteroid, _super);
    /**
     *
     */
    function Asteroid(pos, vel, canvas) {
        var _this = _super.call(this, pos, vel) || this;
        _this.randNum = 8;
        _this.randArray = [];
        _this.coordinates = [];
        _this.canvas = canvas;
        _this.firstVertex;
        for (var i = 0; i < _this.randNum; i++) {
            _this.randArray.push(random(15, 30));
        }
        return _this;
    }
    Asteroid.prototype.move = function () {
        this.checkPositioningInCanvas();
        this.pos.add(this.vel);
    };
    Asteroid.prototype.draw = function () {
        beginShape();
        this.getCoords();
        endShape();
    };
    Asteroid.prototype.getCoords = function () {
        var randVector = createVector(0, -1);
        var first = true;
        for (var i = 0; i <= this.randNum - 1; i++) {
            var newCoord = randVector.copy();
            randVector.rotate((1 / this.randNum) * 360);
            var vertexPT = p5.Vector.sub(this.pos, p5.Vector.mult(newCoord, this.randArray[i]));
            this.coordinates.push(vertexPT.copy());
            if (first) {
                first = false;
                this.firstVertex = vertexPT.copy();
            }
            vertex(vertexPT.x, vertexPT.y);
        }
        vertex(this.firstVertex.x, this.firstVertex.y);
    };
    Asteroid.prototype.checkPositioningInCanvas = function () {
        if (this.pos.x > this.canvas.width) {
            this.pos.x = 0;
        }
        if (this.pos.x < 0) {
            this.pos.x = this.canvas.width;
        }
        if (this.pos.y > this.canvas.height) {
            this.pos.y = 0;
        }
        if (this.pos.y < 0) {
            this.pos.y = this.canvas.height;
        }
    };
    return Asteroid;
}(GameObject));
