import Phaser from 'phaser';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MainScene from './main';
import App from './app';

const mainScene = new MainScene();
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
  scene: [mainScene],
});

window.onbeforeunload = function () {
  game.destroy(true);
};

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(
  <StrictMode>
    <App mainScene={mainScene} />
  </StrictMode>,
);
