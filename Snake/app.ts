import Phaser from "Phaser";

class SnakeGame {
    public game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content",
        {preload: this.preload, create: this.create});
    }


    public preload() {
        this.game.load.image("logo", "phaser2.png");
    }

    public create() {
        const logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        logo.anchor.setTo(0.5, 0.5);
    }
}

window.onload = () => {

    const game = new SnakeGame();

};

