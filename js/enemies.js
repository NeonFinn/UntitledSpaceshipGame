function createEnemies(game) {
    game.enemyData = [
        { left: 900, top: 120 }
    ];
    
    game.enemies = [];

    for (let i = 0; i < game.enemyData.length; i++) {
        let enemy = createSprite('tear_drop_drone', 270);

        enemy.velocityX = 25;
        enemy.left = game.enemyData[i].left;
        enemy.top = game.enemyData[i].top;
        enemy.width = 32;
        enemy.height = 32;
        enemy.collider = true;

        game.enemies.push(enemy);
        game.sprites.push(enemy);
    }
}