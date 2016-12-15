import customSprite from './customSprite';

var game = new Phaser.Game(600, 650, Phaser.AUTO, 'container');

game.States = {};

game.States.main = function() {
    this.preload = function() {
        game.load.image('logo', 'assets/img/img.png');
        if (!game.device.desktop) {
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.forcePortrait = true;
            this.scale.refresh();
        }
    };
    this.create = function() {
        var sprite = new customSprite(game, 0,0,'logo','老王')
        sprite.say()
        game.world.addChild(sprite);
    };
}; 

game.state.add('main', game.States.main);

game.state.start('main');
