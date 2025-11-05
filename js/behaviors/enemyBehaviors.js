SineBehavior = function (velocity) {
    this.velocityY = velocity;
    this.reversed = velocity >= 0;  // This is to handle cases where the enemy ends up off-screen and needs to come back
};

SineBehavior.prototype = {
    execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
        this.moveSpriteHorizontally(sprite, now, lastAnimationFrameTime);
    },

    moveSpriteHorizontally: function (sprite, now, lastAnimationFrameTime) {
        let pixelsToMoveY = (now - lastAnimationFrameTime) / 1000;

        if ((sprite.top <= 0 && !this.reversed) || (sprite.top + sprite.height >= 400 && this.reversed)) {
            this.velocityY = -this.velocityY;
            this.reversed = !this.reversed;
        }

        pixelsToMoveY *= this.velocityY;
        sprite.top += pixelsToMoveY;
    }
};