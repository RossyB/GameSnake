module GameStates {
    export class startScreen extends Phaser.State{
        game: Phaser.Game;
        group: Phaser.Group;
        startScreenImage: Phaser.Sprite;
        music: Phaser.Sound;
        volume: number = 1;

        constructor() {
            super();
        }

        create(){
            this.startScreenImage = this.add.sprite(0, 0, "start-screen");

            this.group = this.game.add.group();
            let newGameButton = this.game.make.button(50, 200, "new-game-button", this.startGame, this, 0, 1);
            let quitButton = this.game.make.button(50 , 350 , "quit-button", this.onClick, this, 0, 1);

            this.group.add(newGameButton);
            this.group.add(quitButton);

            this.music = this.game.sound.add("sound-start-screen", this.volume, true);
            this.music.play();
        }

        startGame() {
            this.game.state.start("gamePlay");
            this.music.stop();
        }

        onClick(){    
            window.close();
        }
    }
}