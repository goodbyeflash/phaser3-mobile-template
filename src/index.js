import Phaser from 'phaser';
import logoImg from './assets/image/logo.png';
import OpenSansFont from './assets/font/OpenSans.ttf';

class MyGame extends Phaser.Scene {
  constructor() {
    super();
    this.centerX = null;
    this.centerY = null;
  }

  preload() {
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
    this.load.image('logo', logoImg);
  }

  create() {
    const logo = this.add.image(this.centerX, this.centerY, 'logo');
    this.add.text(0, 0, 'Template', { fontFamily: 'Open Sans' });
    this.tweens.add({
      targets: logo,
      y: this.centerY + 100,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
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

loadFont('Open Sans', OpenSansFont);

const config = {
  type: Phaser.AUTO,
  scene: MyGame,
  parent: 'phaser-game',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
};

const game = new Phaser.Game(config);
