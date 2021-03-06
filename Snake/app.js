var SnakeGame = (function () {
    function SnakeGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content", {
            preload: this.preload,
            create: this.create
        });
    }
    SnakeGame.prototype.preload = function () {
        // load start screeen and images
        this.game.load.image("start-screen", "assets/images/start-screen.png");
        this.game.load.spritesheet("new-game-button", "assets/sprites/new-game-button.png", 290, 145, 2);
        this.game.load.spritesheet("quit-button", "assets/sprites/quit-button.png", 290, 145, 2);
        this.game.load.image("game-pad", "assets/images/game-pad.png");
        this.game.load.image("game-over-screen", "assets/images/game-over-screen.png");
        this.game.load.spritesheet("snakeBody", "assets/sprites/body.png", 20, 20);
        this.game.load.image("apple", "assets/sprites/Apple.png");
        this.game.load.audio("sound-start-screen", ["assets/music/start-screen.wav"]);
        this.game.load.audio("sound-game-play", ["assets/music/game-play.mp3"]);
        this.game.load.audio("sound-game-over", ["assets/music/game-over.mp3"]);
        this.game.load.audio("sound-eat-apple", ["/assets/music/eat-apple.wav"]);
    };
    SnakeGame.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(0, 0, 800, 600);
        this.game.state.add("startScreen", GameStates.startScreen, true);
        this.game.state.add("gamePlay", GameStates.gamePlay, true);
        this.game.state.add("gameOver", GameStates.gameOver, true);
        this.game.state.start("startScreen");
    };
    return SnakeGame;
}());
window.onload = function () {
    var game = new SnakeGame();
};
//# sourceMappingURL=app.js.map