module GameModels {
    export class Apple extends Phaser.Sprite {
            public apple: Phaser.Sprite;
            constructor(game: Phaser.Game, x: number, y: number) {
                super(game, x, y);
                this.apple = game.add.sprite(x, y, "apple");
                this.apple.anchor.setTo(0.5, 0.5);
            }
        }
}