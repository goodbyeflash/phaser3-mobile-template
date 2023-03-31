import Phaser from 'phaser';
import bgImg from '../assets/image/bg.png';

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
    this.centerX;
    this.centerY;
  }

  /** @returns {void} */
  editorPreload() {
    this.load.image('bg', bgImg);
    for (let i = 0; i < 200; i++) {
      this.load.image('bg' + i, bgImg);
    }
  }

  /** @returns {void} */
  editorCreate() {
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
    const logo = this.add.image(this.centerX, this.centerY - 100, 'logo');
    logo.setScale(0.5, 0.5);

    // progress
    const progress = this.add.text(this.centerX, this.centerY, '0%', {
      fontFamily: 'Dohyun',
      fontSize: '30px',
    });
    progress.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      progress.text = `${Math.ceil(value * 100)}%`;
    });
  }
  preload() {
    this.editorCreate();
    this.editorPreload();
    this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start('Main'));
  }
}
