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
var GameStates;
(function (GameStates) {
    var startScreen = (function (_super) {
        __extends(startScreen, _super);
        function startScreen() {
            var _this = _super.call(this) || this;
            _this.volume = 1;
            return _this;
        }
        startScreen.prototype.create = function () {
            this.startScreenImage = this.add.sprite(0, 0, "start-screen");
            this.group = this.game.add.group();
            var newGameButton = this.game.make.button(50, 200, "new-game-button", this.startGame, this, 0, 1);
            var quitButton = this.game.make.button(50, 350, "quit-button", this.onClick, this, 0, 1);
            this.group.add(newGameButton);
            this.group.add(quitButton);
            this.music = this.game.sound.add("sound-start-screen", this.volume, true);
            this.music.play();
        };
        startScreen.prototype.startGame = function () {
            this.game.state.start("gamePlay");
            this.music.stop();
        };
        startScreen.prototype.onClick = function () {
            window.close();
        };
        return startScreen;
    }(Phaser.State));
    GameStates.startScreen = startScreen;
})(GameStates || (GameStates = {}));
//# sourceMappingURL=startScreen.js.map