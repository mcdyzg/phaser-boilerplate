export default class customSprite extends Phaser.Sprite {
    constructor(game, x, y, frame, name){
        super(game, x, y, frame);
        this.sname = name
    }

    say(){
        console.log(this.sname)
    }
}
