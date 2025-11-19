// powerups.js

function createBluePowerUps(game) {
    game.powerUpData = [
        { left: 700, top: 300 }
    ];

    for (let i = 0; i < game.powerUpData.length; i++) {
        let powerUp = createSprite('blue_power_up', 0, [new CycleBehavior(game.POWER_UP_CYCLE_DURATION, 0)]);

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

function createRedPowerUps(game) {
    game.powerUpData = [
        { left: 400, top: 100 }];

    for (let i = 0; i < game.powerUpData.length; i++) {
        let powerUp = createSprite('red_power_up', 0, [new CycleBehavior(game.POWER_UP_CYCLE_DURATION, 0)]);

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

function createGreenPowerUps(game) {
    game.powerUpData = [
        { left: 300, top: 200 }];

    for (let i = 0; i < game.powerUpData.length; i++) {
        let powerUp = createSprite('green_power_up', 0, [new CycleBehavior(game.POWER_UP_CYCLE_DURATION, 0)]);

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