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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(pos, vel, acc, velLimit, size, canvas) {
        var _this = _super.call(this, pos, vel, size) || this;
        _this.acc = acc;
        _this.velLimit = velLimit;
        _this.canvas = canvas;
        _this.coordinates = {
            r0: createVector(0, 0),
            r120: createVector(0, 0),
            r240: createVector(0, 0)
        };
        return _this;
    }
    Player.prototype.move = function () {
        stroke(0, 0, 255);
        var accellVector = createVector(0, 0);
        if (keyIsDown(65)) {
            accellVector.add(createVector(-1, 0));
        }
        if (keyIsDown(68)) {
            accellVector.add(createVector(1, 0));
        }
        if (keyIsDown(83)) {
            accellVector.add(createVector(0, 1));
        }
        if (keyIsDown(87)) {
            accellVector.add(createVector(0, -1));
        }
        if (keyIsDown(66)) {
            accellVector.add(createVector(-this.vel.x, -this.vel.y));
        }
        this.accellerate(accellVector);
        this.vel.add(this.acc);
        this.vel.limit(this.velLimit);
        this.pos.add(this.vel);
    };
    Player.prototype.accellerate = function (direction) {
        this.acc = p5.Vector.sub(direction.add(this.pos), this.pos);
        //this.acc.setMag(1)
        this.acc.mult(.2);
    };
    Player.prototype.draw = function () {
        this.checkPositioningInCanvas();
        this.getCoords();
        push();
        fill(255);
        triangle(this.coordinates.r0.x, this.coordinates.r0.y, this.coordinates.r120.x, this.coordinates.r120.y, this.coordinates.r240.x, this.coordinates.r240.y);
        square(this.coordinates.r0.x, this.coordinates.r0.y, 3);
        pop();
    };
    Player.prototype.getCoords = function () {
        var mouse = createVector(mouseX, mouseY);
        this.facing = p5.Vector.sub(this.pos, mouse).normalize();
        this.facing.mult(this.size);
        this.coordinates.r0 = p5.Vector.sub(this.pos, createVector(this.facing.x, this.facing.y));
        this.facing.rotate(120);
        this.coordinates.r120 = p5.Vector.sub(this.pos, createVector(this.facing.x, this.facing.y));
        this.facing.rotate(120);
        this.coordinates.r240 = p5.Vector.sub(this.pos, createVector(this.facing.x, this.facing.y));
    };
    Player.prototype.checkPositioningInCanvas = function () {
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
    Player.prototype.fire = function (environment) {
        var mouse = createVector(mouseX, mouseY);
        var bullet = new Bullet(this.coordinates.r0, p5.Vector.sub(mouse, this.coordinates.r0), 6, ((this.vel.mag() + this.acc.mag()) > 2 ? (this.vel.mag() + this.acc.mag()) : 2) * 2, environment);
        environment.objects.push(bullet);
        environment.bullets.push(bullet);
    };
    return Player;
}(GameObject));
