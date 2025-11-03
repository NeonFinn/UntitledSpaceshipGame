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

function setupPowerUpCollisions(game) {
    game.checkPowerUpCollisions = function () {
        let player = game.player;

        for (let i = 0; i < game.powerUps.length; i++) {
            let powerUp = game.powerUps[i];

            // if powerup is already collected, skip
            if (!powerUp.visible) continue;

            // use hOffset for scrolling
            let powerUpLeftOnScreen = powerUp.left - powerUp.hOffset;
            let powerUpRightOnScreen = powerUpLeftOnScreen + powerUp.width;

            let playerLeftOnScreen = player.left - player.hOffset;
            let playerRightOnScreen = playerLeftOnScreen + player.width;

            let playerTop = player.top;
            let playerBottom = player.top + player.height;

            let powerUpTop = powerUp.top;
            let powerUpBottom = powerUp.top + powerUp.height;

            // AABB collision detection
            if (playerLeftOnScreen < powerUpRightOnScreen &&
                playerRightOnScreen > powerUpLeftOnScreen &&
                playerTop < powerUpBottom &&
                playerBottom > powerUpTop) {

                console.log(`Power-up collision with ${powerUp.type} at ${powerUp.left} ${powerUp.top}`);

                powerUp.visible = false;

                // place holder properties on player for power-up effects
                if (powerUp.type === 'red_power_up') {
                    player.defenseBoost = true;
                }
                if (powerUp.type === 'green_power_up') {
                    player.speedBoost = true;
                }
                if (powerUp.type === 'blue_power_up') {
                    player.weaponUpgrade = true;
                }
            }
        }
    }
}