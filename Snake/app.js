"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser_1 = require("Phaser");
var SnakeGame = (function () {
    function SnakeGame() {
        this.game = new Phaser_1.default.Game(800, 600, Phaser_1.default.AUTO, "content", { preload: this.preload, create: this.create });
    }
    SnakeGame.prototype.preload = function () {
        this.game.load.image("logo", "phaser2.png");
    };
    SnakeGame.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        logo.anchor.setTo(0.5, 0.5);
    };
    return SnakeGame;
}());
window.onload = function () {
    var game = new SnakeGame();
};
//# sourceMappingURL=app.js.map