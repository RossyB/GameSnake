
class SnakeGame {
    public game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content",{
            preload: this.preload, 
            create: this.create
        });
    }

    public preload() {
        // load start screeen and images
        this.game.load.image("start-screen", "assets/images/start-screen.png");
        this.game.load.spritesheet("new-game-button", "assets/sprites/new-game-button.png", 290, 145, 2);
        this.game.load.spritesheet("quit-button", "assets/sprites/quit-button.png", 290, 145, 2);

        this.game.load.image("game-pad", "assets/images/game-pad.png");
        this.game.load.spritesheet("snakeBody", "assets/sprites/body.png", 20, 20);

        this.game.load.image("apple", "assets/sprites/Apple.png");
    }

    public create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(0, 0, 800, 600);
        
        this.game.state.add("startScreen", GameStates.startScreen, true);
        this.game.state.add("gamePlay", GameStates.gamePlay, true);

        this.game.state.start("startScreen");
    }
}

window.onload = () => {

    const game = new SnakeGame();

};

