// Code to allow the enemy to shoot moving projectiles with a pattern.

let enemyShoot = function(game){
     let shot = createSprite('shot', 0, new [enemyBulletInterval(200)]);
    shot.velocityX = 80;
    shot.left = game.enemy.left - game.enemy.hOffset + game.enemy.width;
    shot.top = game.enemy.top + game.enemy.height / 2 - shot.height / 2
    shot.width = 30;
    shot.height = 18;
    shot.hOffset = 0;
    game.shots.push(shot);
    game.sprites.push(shot);
    console.log("This is being run we swear");
}