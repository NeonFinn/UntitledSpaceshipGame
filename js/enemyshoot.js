// Code to allow the enemy to shoot moving projectiles with a pattern.

let enemyShoot = function (game, sprite) {
    let shot = createSprite('shot', 0, [spaceshipGame.collideBehavior]);
    shot.velocityX = 80;
    shot.left = sprite.left - sprite.hOffset - shot.width;
    shot.top = sprite.top + sprite.height / 2 - shot.height / 2
    shot.width = 30;
    shot.height = 18;
    shot.hOffset = 0;

    game.shots.push(shot);
    game.sprites.push(shot);
}