SineBehavior = function (velocity) {
    this.velocityY = velocity;
    this.reversed = velocity >= 0;  // This is to handle cases where the enemy ends up off-screen and needs to come back
};

SineBehavior.prototype = {
    execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
        this.moveSpriteVertically(sprite, now, lastAnimationFrameTime);
    },

    moveSpriteVertically: function (sprite, now, lastAnimationFrameTime) {
        const SCREEN_HEIGHT = 400;
        let pixelsToMoveY = (now - lastAnimationFrameTime) / 1000;

        if ((sprite.top <= 0 && !this.reversed) || (sprite.top + sprite.height >= SCREEN_HEIGHT && this.reversed)) {
            this.velocityY = -this.velocityY;
            this.reversed = !this.reversed;
        }

        pixelsToMoveY *= this.velocityY;
        sprite.top += pixelsToMoveY;
    }
};

DroneBehavior = function (interval, speed) {
    this.interval = interval || 1000;
    this.speed = speed || 60;
    this.dashing = true;
    this.lastCycle = 0;
};

DroneBehavior.prototype = {
    execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
        // Implement a cycle based system to toggle between dashing and not. Makes it easier to have dash intervals.
        if (now - this.lastCycle > this.interval) {
            this.lastCycle = now;
            this.dashing = !this.dashing;
        }

        this.dash(sprite, now, lastAnimationFrameTime);
    },

    dash: function (sprite, now, lastAnimationFrameTime) {
        if (!this.dashing) return;

        let pixelsToMoveX = (now - lastAnimationFrameTime) / 1000;
        let pixelsToMoveY = (now - lastAnimationFrameTime) / 1000;
        let xDistance = spaceshipGame.player.left - sprite.left;
        let yDistance = spaceshipGame.player.top - sprite.top;
        let distance = Math.hypot(xDistance, yDistance);  // Used for normalization
        let xDirection = xDistance / distance;  // Normalizes the distance to get a direction
        let yDirection = yDistance / distance;  // Same here

        pixelsToMoveX *= xDirection * this.speed;
        pixelsToMoveY *= yDirection * this.speed;
        sprite.left += pixelsToMoveX;
        sprite.top += pixelsToMoveY;
    }
};

FollowBehavior = function (horizontalVelocity, verticalVelocity) {
    this.horizontalVelocity = horizontalVelocity;
    this.verticalVelocity = verticalVelocity;
    this.approaching = true;
};

FollowBehavior.prototype = {
    execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
        if (this.approaching && sprite.left - sprite.hOffset >= 300) {
            sprite.velocityX = this.horizontalVelocity;
        } else if (this.approaching) {
            this.approaching = false;
            sprite.velocityX = 0;
            sprite.behaviors.push(new BulletFiring(250));
        }

        this.moveSpriteVertically(sprite, now, lastAnimationFrameTime);
    },

    moveSpriteVertically: function (sprite, now, lastAnimationFrameTime) {
        let pixelsToMoveY = (now - lastAnimationFrameTime) / 1000;
        let playerY = spaceshipGame.player.top + spaceshipGame.player.height / 2;
        let spriteY = sprite.top + sprite.height / 2;

        if (playerY > spriteY) {
            pixelsToMoveY *= this.verticalVelocity;
        } else if (playerY < spriteY) {
            pixelsToMoveY *= -this.verticalVelocity;
        } else {
            pixelsToMoveY *= 0;
        }

        sprite.top += pixelsToMoveY;
    }
};

ShieldBehavior = function (speed) {
    this.speed = speed || 100;
    this.closestEnemy = null;
};

ShieldBehavior.prototype = {
    execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
        let pixelsToMoveX = (now - lastAnimationFrameTime) / 1000;
        let pixelsToMoveY = (now - lastAnimationFrameTime) / 1000;

        this.getClosestEnemyToPlayer();

        let xTarget = (this.closestEnemy.left - sprite.width / 2) - this.closestEnemy.hOffset;
        let yTarget = this.closestEnemy.top + (this.closestEnemy.height / 2);
        let xDistance = xTarget - (sprite.left + sprite.width / 2);
        let yDistance = yTarget - (sprite.top + sprite.height / 2);
        let distance = Math.hypot(xDistance, yDistance);

        let normalizedDirectionX = xDistance / distance;
        let normalizedDirectionY = yDistance / distance;

        pixelsToMoveX *= normalizedDirectionX * this.speed;
        pixelsToMoveY *= normalizedDirectionY * this.speed;
        sprite.left += pixelsToMoveX;
        sprite.top += pixelsToMoveY;
    },

    getClosestEnemyToPlayer: function () {
        let closestEnemy;
        let closestDist;
        let playerCenterX = spaceshipGame.player.left + spaceshipGame.player.width / 2;
        let playerCenterY = spaceshipGame.player.top + spaceshipGame.player.height / 2;

        for (let i = 0; i < spaceshipGame.enemies.length; i++) {
            let enemy = spaceshipGame.enemies[i];

            if (enemy.type === "shield") continue;

            let enemyX = (enemy.left + enemy.width / 2) - enemy.hOffset;
            let enemyY = enemy.top + enemy.height / 2;
            let xDist = enemyX - playerCenterX;
            let yDist = enemyY - playerCenterY;
            let dist = Math.abs(Math.hypot(xDist, yDist));

            console.log(enemy.type, dist);

            if (dist < closestDist || !closestDist) {
                closestDist = dist;
                closestEnemy = enemy;
            }
        }

        this.closestEnemy = closestEnemy;
    }
};