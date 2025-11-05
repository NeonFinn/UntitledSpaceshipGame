SineBehavior = function (velocity) {
    this.velocityY = velocity;
    this.reversed = velocity >= 0;  // This is to handle cases where the enemy ends up off-screen and needs to come back
};

SineBehavior.prototype = {
    execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
        this.moveSpriteHorizontally(sprite, now, lastAnimationFrameTime);
    },

    moveSpriteHorizontally: function (sprite, now, lastAnimationFrameTime) {
        const SCREEN_WIDTH = 800;
        let pixelsToMoveY = (now - lastAnimationFrameTime) / 1000;

        if ((sprite.top <= 0 && !this.reversed) || (sprite.top + sprite.height >= SCREEN_WIDTH && this.reversed)) {
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