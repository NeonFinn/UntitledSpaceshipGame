BulletFiring = function (interval) {
    this.interval = interval;
    this.lastFired = 0;
};

BulletFiring.prototype = {
    execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
        if (now - this.lastFired > this.interval) {
            enemyShoot(spaceshipGame, sprite);
            this.lastFired = now;
        }
    }
};