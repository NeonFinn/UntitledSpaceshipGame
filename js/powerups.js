// powerups.js

function createPowerUps(game) {
    game.powerUpData = [
        { left: 300, top: 50, color: 'red' },
        { left: 650, top: 400, color: 'green' },
        { left: 1000, top: 200, color: 'yellow' },
        { left: 1350, top: 350, color: 'blue' },
        { left: 1750, top: 100, color: 'yellow' },
        { left: 2100, top: 450, color: 'red' },
        { left: 2450, top: 300, color: 'blue' },
        { left: 2800, top: 150, color: 'green' },
        { left: 3200, top: 400, color: 'red' },
        { left: 3550, top: 50, color: 'yellow' },
        { left: 3900, top: 250, color: 'green' },
        { left: 4250, top: 350, color: 'blue' },
        { left: 4600, top: 100, color: 'green' },
        { left: 4850, top: 450, color: 'red' },
        { left: 5000, top: 200, color: 'yellow' },
];

    for (let i = 0; i < game.powerUpData.length; i++) {
        let powerUp = createSprite(`${game.powerUpData[i].color}_power_up`, 0, [new CycleBehavior(game.POWER_UP_CYCLE_DURATION, 0)])

        powerUp.velocityX = 25;
        powerUp.left = game.powerUpData[i].left;
        powerUp.top = game.powerUpData[i].top;
        powerUp.width = 16;
        powerUp.height = 16;
        powerUp.collider = true;

        game.powerUps.push(powerUp);
        game.sprites.push(powerUp);
    }
}