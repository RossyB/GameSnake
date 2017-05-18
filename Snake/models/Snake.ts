module GameModels {
    export class Snake extends Phaser.Sprite{  
        snakeHead: Phaser.Sprite;   
        snakeBody: Phaser.Sprite[];
        snakePath: Phaser.Point[];
        group: Phaser.Group;
        numSnakeSection : number;
        snakeSpacer: number;

            constructor(game: Phaser.Game, x: number, y: number) {
                super(game, x, y);

                this.snakeBody = [];
                this.snakePath = [];
                this.numSnakeSection = 10;
                this.snakeSpacer = 6;
                this.group = this.game.add.group();

                this.snakeHead =this.game.add.sprite(x, y, "snakeBody");
                this.snakeHead.anchor.setTo(0.5, 0.5);
                this.game.physics.arcade.enable(this.snakeHead);
                this.group.add(this.snakeHead);
                
                for (var index = 0; index < this.numSnakeSection; index++) {
                    this.snakeBody[index] = this.game.add.sprite(x + index * 20 + 20, y, "snakeBody");
                    this.snakeBody[index].anchor.setTo(0.5, 0.5);
                    this.game.physics.arcade.enable(this.snakeBody[index]);
                }
                for (var i = 0; i < this.numSnakeSection * this.snakeSpacer; i++)
                {
                    this.snakePath[i] = new Phaser.Point(400, 300);
                }   
            }
    }
}