import skyImg from './assets/sky.png';
import groundImg from './assets/ground.png';
import starImg from './assets/star.png';
import bombImg from './assets/bomb.png';

class MainScene extends Phaser.Scene {
  public preload() {
    this.load.image('sky', skyImg);
    this.load.image('ground', groundImg);
    this.load.image('star', starImg);
    this.load.image('bomb', bombImg);
  }

  public create() {
    // sky
    const sky = this.add.image(600, 450, 'sky');
    sky.setScale(1.5);

    // ground
    const staticGroup = this.physics.add.staticGroup();
    const ground = staticGroup
      .create(600, 900 - 16, 'ground') // 16 is half the image height
      .setScale(3)
      .refreshBody();

    // bomb
    const bomb = this.physics.add.image(600, 450, 'bomb');
    this.physics.add.collider(bomb, ground);
    bomb.setBounce(0.5);
  }

  public update() {}
}

export default MainScene;
