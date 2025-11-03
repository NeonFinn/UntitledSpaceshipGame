// Code to allow the player to shoot a moving projectile

let playerShoot = function(game){
    let shot = createSprite('shot', 0);
    shot.velocityX = 50;
    shot.left = game.player.left - game.player.hOffset + game.player.width;
    shot.top = game.player.top + game.player.height / 2 - shot.height / 2
    shot.width = 30;
    shot.height = 18;
    shot.hOffset = 0;
    console.log("The shooting is being called properly");
}