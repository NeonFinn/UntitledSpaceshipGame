// explosions.js
let ExplosionBehavior = function () {};

ExplosionBehavior.prototype = {
    execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
        if(sprite.artist.cellIndex === sprite.artist.cells.length - 1){
            sprite.visible = false;
        }
    },
}
function createExplosions(game,left,top){
    let explosion = createSprite('explosion',0, [new CycleBehavior(game.EXPLOSION_CYCLE_DURATION), new ExplosionBehavior()])
    explosion.left = left;
    explosion.top = top;
    game.sprites.push(explosion);
}