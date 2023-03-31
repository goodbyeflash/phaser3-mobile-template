import Phaser from 'phaser';
import logoImg from './assets/image/logo.png';
import fontUrl from './assets/font/Dohyun.ttf';
import Preload from './script/preload';
import Main from './script/main';

window.addEventListener('load', () => {
  const config = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    backgroundColor: '#242424',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 720,
      height: 1280,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
      },
    },
  };
  const game = new Phaser.Game(config);
  game.scene.add('Preload', Preload);
  game.scene.add('Main', Main);
  game.scene.add('Boot', Boot, true);

  loadFont('Dohyun', fontUrl);
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.image('logo', logoImg);
    this.load.on(Phaser.Loader.Events.COMPLETE, () => {
      this.scene.start('Preload');
    });
  }
}

const loadFont = (name, url) => {
  let newFont = new FontFace(name, `url(${url})`);
  newFont
    .load()
    .then(function (loaded) {
      document.fonts.add(loaded);
    })
    .catch(function (error) {
      return error;
    });
};
