// powerups.js

function createPowerUps(game) {
    game.powerUpData = [
        { left: 2000, top: 150, color: 'blue' },
        { left: 2500, top: 100, color: 'yellow' },
        { left: 3000, top: 250, color: 'green' },
        { left: 3500, top: 300, color: 'blue' },
        { left: 4000, top: 150, color: 'red' },
        { left: 4500, top: 200, color: 'green' },
        { left: 5000, top: 100, color: 'yellow' },
        { left: 5500, top: 150, color: 'blue' },
        { left: 6000, top: 300, color: 'red' },
        { left: 6500, top: 100, color: 'yellow' },
        { left: 7000, top: 200, color: 'green' },

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