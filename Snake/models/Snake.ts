module GameModels {
    export class Snake extends Phaser.Sprite{  
        snakeHead: Phaser.Sprite;   
        snakeBody: Phaser.Sprite[];
        snakePath: Phaser.Point[];
        group: Phaser.Group;
        numSnakeSections : number;
        snakeSpacer: number;
        lastX: number;
        lastY: number;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y);

            this.snakeBody = [];
            this.snakePath = [];
            this.numSnakeSections = 5;
            this.snakeSpacer = 8;
            this.group = this.game.add.group();

            this.snakeHead = this.game.add.sprite(x, y, "snakeBody");
            this.snakeHead.anchor.setTo(0.5, 0.5);
            this.game.physics.arcade.enable(this.snakeHead);
            this.group.add(this.snakeHead);
            
            for (let index = 0; index < this.numSnakeSections; index++) {
                this.snakeBody[index] = this.game.add.sprite(x - index * 3, y, "snakeBody");
                this.snakeBody[index].anchor.setTo(0.5, 0.5);
                this.game.physics.arcade.enable(this.snakeBody[index]);
            }
            for (let index = 0; index < this.numSnakeSections * this.snakeSpacer; index++)
            {
                this.snakePath[index] = new Phaser.Point(400 - index * 3, 300);
            }   
        }

        addBody(game, x, y){
            this.snakeBody.push(this.game.add.sprite(x, y, "snakeBody"));
            this.numSnakeSections++;
            this.lastX = this.snakeBody[this.numSnakeSections-1].x;
            this.lastY = this.snakeBody[this.numSnakeSections-1].y;
            this.snakeBody[this.numSnakeSections-1].anchor.setTo(0.5, 0.5);
            this.game.physics.arcade.enable(this.snakeBody[this.numSnakeSections-1]);
            this.group.add(this.snakeBody[this.numSnakeSections-1]);

            for (let index = 0; index < this.snakeSpacer; index++) {
                this.snakePath.push(new Phaser.Point(this.lastX + index, this.lastY))
            }
        }
    }
}