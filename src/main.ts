import * as Phaser from 'phaser'

import { TestScene } from './scenes/TestScene'

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Phaser Template',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    parent: 'game',
    backgroundColor: '#efc533',

    scene: [TestScene]
};

export const game = new Phaser.Game(gameConfig);
