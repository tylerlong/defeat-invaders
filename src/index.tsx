import Phaser from 'phaser';

import MainScene from './main';

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1200,
  height: 900,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 },
      debug: true,
    },
  },
  scene: [MainScene],
});

window.onbeforeunload = function () {
  game.destroy(true);
};
