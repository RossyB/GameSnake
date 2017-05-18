
module GameStates{
    export class gamePlay extends Phaser.State{
        game: Phaser.Game;
        background: Phaser.Sprite;
        snake: GameModels.Snake;
        apple: GameModels.Apple;
        score: number;
        speed: number;
        updateDalay = 0;
        direction = "right";
        newDirection = null;
        addNew = false;

        constructor() {
            super();
        }

        create(){
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, "game-pad");
            this.snake = new GameModels.Snake(this.game, 400, 300);
            this.score = 0;
            this.speed = 0;
            let textStyleKey = { font: "bold 14px sans-serif", fill: "#134f01", align: "center" };
            let textStyleValue = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };

            // Score.
            this.game.add.text(30, 20, "SCORE", textStyleKey);
            let scoreTextValue = this.game.add.text(90, 18, this.score.toString(), textStyleValue);
            // Speed.
            this.game.add.text(695, 20, "SPEED", textStyleKey);
            let speedTextValue = this.game.add.text(750, 18, this.speed.toString(), textStyleValue);

            let cursors = this.game.input.keyboard.createCursorKeys();

            this.generateApple(); 
        }

        update(){

        }

        generateApple(){

        // Chose a random place on the grid.
        let randomX = Math.floor(Math.random() * 39 ) * 15 + 15,
            randomY = Math.floor(Math.random() * 29 ) * 15 + 15;

        // Add a new apple.
        this.apple = new GameModels.Apple(this.game, randomX, randomY);
        }
    }
}