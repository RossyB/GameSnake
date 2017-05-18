var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameModels;
(function (GameModels) {
    var Apple = (function (_super) {
        __extends(Apple, _super);
        function Apple(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.apple = game.add.sprite(x, y, "apple");
            _this.apple.anchor.setTo(0.5, 0.5);
            return _this;
        }
        return Apple;
    }(Phaser.Sprite));
    GameModels.Apple = Apple;
})(GameModels || (GameModels = {}));
//# sourceMappingURL=Apple.js.map