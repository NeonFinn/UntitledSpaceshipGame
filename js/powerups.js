// powerups.js

function createBluePowerUps(game) {
    const powerUpData = [
        { left: 700, top: 300 },
    ];

    game.powerUps = [];

    for (let i = 0; i < powerUpData.length; i++) {
        let powerUp = createSprite('blue_power_up', 0, [new CycleBehavior(game.POWER_UP_CYCLE_DURATION, 0)]);
        powerUp.velocityX = 25;
        powerUp.left = powerUpData[i].left;
        powerUp.top = powerUpData[i].top;

        game.powerUps.push(powerUp);
        game.sprites.push(powerUp);
    }
}

function createRedPowerUps(game) {
    const powerUpData = [
        { left: 400, top: 100 },
    ];

    game.powerUps = [];

    for (let i = 0; i < powerUpData.length; i++) {
        let powerUp = createSprite('red_power_up', 0, [new CycleBehavior(game.POWER_UP_CYCLE_DURATION, 0)]);
        powerUp.velocityX = 25;
        powerUp.left = powerUpData[i].left;
        powerUp.top = powerUpData[i].top;

        game.powerUps.push(powerUp);
        game.sprites.push(powerUp);
    }
}

function createGreenPowerUps(game) {
    const powerUpData = [
        { left: 300, top: 200 },
    ];

    game.powerUps = [];

    for (let i = 0; i < powerUpData.length; i++) {
        let powerUp = createSprite('green_power_up', 0, [new CycleBehavior(game.POWER_UP_CYCLE_DURATION, 0)]);
        powerUp.velocityX = 25;
        powerUp.left = powerUpData[i].left;
        powerUp.top = powerUpData[i].top;

        game.powerUps.push(powerUp);
        game.sprites.push(powerUp);
    }
}
