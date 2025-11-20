// powerups.js

function createPowerUps(game) {
    game.powerUpData = [
        { left: 700, top: 300, color: 'blue' },
        { left: 400, top: 100, color: 'red' },
        { left: 300, top: 200, color: 'green' },
        { left: 600, top: 150, color: 'yellow' }
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