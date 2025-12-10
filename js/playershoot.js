// Code to allow the player to shoot a moving projectile

let playerShoot = function(game){
    const OFFSET_BULLET_LEFT_ADJUST = 8;
    const OFFSET_BULLET_TOP_ADJUST = 12;
    let shots = [];
    let shot1 = createSprite('shot', 0, [spaceshipGame.collideBehavior]);
    shot1.type = 'playerShot';
    let shot2 = createSprite('shot', 0, [spaceshipGame.collideBehavior]);
    shot2.type = 'playerShot';
    let shot3 = createSprite('shot', 0, [spaceshipGame.collideBehavior]);
    shot3.type = 'playerShot';

    switch (game.player.bulletStage) {
        case 1:
            shot1.velocityX = 120;
            break;
        case 2:
            shot1.velocityX = 160;
            break;
        default:
            shot1.velocityX = 80;
            break;
    }

    Object.assign(shot2, shot1);
    Object.assign(shot3, shot1);

    switch (game.player.weaponStage) {
        case 1: {
            shots = [shot1, shot2];

            shots[0].left = game.player.left - game.player.hOffset + game.player.width - OFFSET_BULLET_LEFT_ADJUST;
            shots[0].top = game.player.top + game.player.height / 2 - shot1.height / 2 - OFFSET_BULLET_TOP_ADJUST;
            shots[1].left = game.player.left - game.player.hOffset + game.player.width - OFFSET_BULLET_LEFT_ADJUST;
            shots[1].top = game.player.top + game.player.height / 2 - shot1.height / 2 + OFFSET_BULLET_TOP_ADJUST;

            break;
        }
        case 2: {
            shots = [shot1, shot2, shot3];

            shots[0].left = game.player.left - game.player.hOffset + game.player.width - OFFSET_BULLET_LEFT_ADJUST;
            shots[0].top = game.player.top + game.player.height / 2 - shot1.height / 2 - OFFSET_BULLET_TOP_ADJUST;
            shots[1].left = game.player.left - game.player.hOffset + game.player.width - OFFSET_BULLET_LEFT_ADJUST;
            shots[1].top = game.player.top + game.player.height / 2 - shot1.height / 2 + OFFSET_BULLET_TOP_ADJUST;
            shots[2].left = game.player.left - game.player.hOffset + game.player.width;
            shots[2].top = game.player.top + game.player.height / 2 - shot1.height / 2;

            break;
        }
        default:
            shots.push(shot1);

            shots[0].left = game.player.left - game.player.hOffset + game.player.width;
            shots[0].top = game.player.top + game.player.height / 2 - shot1.height / 2;

            break;
    }

    for (let shot of shots) {
        shot.direction = "right";

        game.shots.push(shot);
        game.sprites.push(shot);
    }
}