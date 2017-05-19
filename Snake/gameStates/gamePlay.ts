
module GameStates{
    export class gamePlay extends Phaser.State{
        game: Phaser.Game;
        background: Phaser.Sprite;
        music: Phaser.Sound;
        volume: number = 1;
        eatAppleSound: Phaser.Sound;
        gameOverSound: Phaser.Sound;
        snake: GameModels.Snake;
        apple: GameModels.Apple;
        score: number;
        speed: number;
        updateDelay: number;
        direction : string;
        newDirection : string
        addNew : boolean;
        cursors : Phaser.CursorKeys;
        scoreTextValue: Phaser.Text;
        speedTextValue: Phaser.Text;


        constructor() {
            super();
        }

        create(){
            this.updateDelay = 0;
            this.direction = "right";
            this.newDirection = null;
            this.addNew = false;
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, "game-pad");
            this.snake = new GameModels.Snake(this.game, 400, 300);
            this.score = 0;
            this.speed = 0;
            let textStyleKey = { font: "bold 14px sans-serif", fill: "#134f01", align: "center" };
            let textStyleValue = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
            this.eatAppleSound = this.game.sound.add("sound-eat-apple", this.volume, true);
            this.gameOverSound = this.game.sound.add("sound-game-over", this.volume, true);
            this.music = this.game.sound.add("sound-game-play", this.volume, true);
            this.music.play();

            // Score.
            this.game.add.text(30, 20, "SCORE", textStyleKey);
            this.scoreTextValue = this.game.add.text(90, 18, this.score.toString(), textStyleValue);
            // Speed.
            this.game.add.text(695, 20, "SPEED", textStyleKey);
            this.speedTextValue = this.game.add.text(750, 18, this.speed.toString(), textStyleValue);

            this.cursors = this.game.input.keyboard.createCursorKeys();

            this.generateApple();
        }

        update(){
            this.snake.snakeHead.body.velocity.setTo(0, 0);
            this.snake.snakeHead.body.angularVelocity = 0;
            let snakeVelocity = 120;

            this.game.physics.arcade.collide(this.snake.snakeHead, this.apple, this.appleCollision, null, this);
            this.game.physics.arcade.collide(this.snake.snakeHead, this.snake.snakeBody, this.selfCollision, null, this)

            if (this.cursors.right.isDown && this.direction!='left'){
                this.newDirection = 'right';
            }
            else if (this.cursors.left.isDown && this.direction!='right'){
                this.newDirection = 'left';
            }
            else if (this.cursors.up.isDown && this.direction!='down'){
                this.newDirection = 'up';
            }
            else if (this.cursors.down.isDown && this.direction!='up'){
                this.newDirection = 'down';
            }

            this.speed = Math.min(10, Math.floor(this.score/5));
            this.speedTextValue.text = this.speed.toString();

            this.updateDelay++;

            if (this.updateDelay % (10 - this.speed) == 0) {

                // If a new direction has been chosen from the keyboard, make it the direction of the snake now.
                if(this.newDirection){
                    this.direction = this.newDirection;
                    this.newDirection = null;
                }
            }
            
            if(this.direction === 'right'){
                this.snake.snakeHead.body.velocity.x += snakeVelocity;
                let part = this.snake.snakePath.pop();
                part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
                this.snake.snakePath.unshift(part);

                for (let i = 0; i < this.snake.snakeBody.length; i++) {
                    this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
                    this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
                }
            }
            else if(this.direction === 'left'){
                this.snake.snakeHead.body.velocity.x -= snakeVelocity;
                let part = this.snake.snakePath.pop();
                part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
                this.snake.snakePath.unshift(part);

                for (let i = 0; i < this.snake.snakeBody.length; i++) {
                    this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
                    this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
                }
            }

            else if(this.direction === 'up'){
                this.snake.snakeHead.body.velocity.y -= snakeVelocity;
                let part = this.snake.snakePath.pop();
                part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
                this.snake.snakePath.unshift(part);

                for (let i = 0; i < this.snake.snakeBody.length; i++) {
                    this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
                    this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
                }
            }
            else if(this.direction == 'down'){
                this.snake.snakeHead.body.velocity.y += snakeVelocity;
                let part = this.snake.snakePath.pop();
                part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
                this.snake.snakePath.unshift(part);

                for (let i = 0; i < this.snake.snakeBody.length; i++) {
                    this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
                    this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
                }
            }

            this.wallCollision(this.snake.snakeHead);
        }

        renderGroup(member) { 
                this.game.debug.body(member);
        }

        generateApple(){

        // Chose a random place on the grid.
        let randomX = Math.floor(Math.random() * 39 ) * 15 + 15,
            randomY = Math.floor(Math.random() * 29 ) * 15 + 15;

        // Add a new apple.
        this.apple = new GameModels.Apple(this.game, randomX, randomY);
        this.apple.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enable(this.apple);
        }
        
        appleCollision (snakeHead, apple) {

            // Destroy the old apple.
            apple.destroyApple();
            this.eatAppleSound.play(null, null, this.volume, false);


            // Make a new one.
            this.generateApple();
            this.snake.addBody(this.game, this.snake.lastX, this.snake.lastY);

            // Increase score.
            this.score++;
            this.speed++;

            // Refresh scoreboard.
            this.scoreTextValue.text = this.score.toString();
            this.speedTextValue.text = this.speed.toString();
        }

        selfCollision(snakeHead, snakeGroup){
            for(var i = 0; i < snakeGroup.length - 1; i++){
                if(snakeHead.x === snakeGroup[i].x && snakeHead.y === snakeGroup[i].y){

                    this.music.stop();
                    this.gameOverSound.play(null, null, this.volume, false);
                    this.game.state.start('gameOver');
                }
            }   
        }

        wallCollision(snakeHead) {

            if(snakeHead.x >= 800 || snakeHead.x < 0 || snakeHead.y >= 600 || snakeHead.y < 0){

                this.music.stop();
                this.gameOverSound.play(null, null, this.volume, false);
                this.game.state.start('gameOver');
            }

        }
    }
}