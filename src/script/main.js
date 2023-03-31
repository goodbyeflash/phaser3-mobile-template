import Phaser from 'phaser';

export default class Main extends Phaser.Scene {
  constructor() {
    super('Main');
  }

  create() {
    this.add.image(0, 0, 'bg');
  }
}
