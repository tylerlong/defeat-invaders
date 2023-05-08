import skyImg from './assets/sky.png';
import groundImg from './assets/ground.png';
import starImg from './assets/star.png';
import bombImg from './assets/bomb.png';

class MainScene extends Phaser.Scene {
  public cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  public bomb: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

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
    this.bomb = this.physics.add.image(200, 600, 'bomb');
    this.physics.add.collider(this.bomb, ground);
    this.bomb.setBounce(0.5);
    this.bomb.setDrag(200);

    // star
    const star = this.physics.add.image(1000, 600, 'star');
    this.physics.add.collider(star, ground);
    star.setBounce(0.5);

    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }

  public update() {
    if (this.cursorKeys.space.isDown) {
      this.bomb.setVelocity(500, -500);
    }
  }
}

export default MainScene;
