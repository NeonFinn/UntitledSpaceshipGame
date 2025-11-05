function createEnemies(game) {
    // Defines initial spawn points and enemy types
    game.enemyData = [
        {left: 400, top: 100, type: "drone"},
        {left: 500, top: 160, type: "sine"},
        {left: 600, top: 220, type: "seeker"},
        {left: 700, top: 260, type: "dasher"}
    ];

    game.enemies = [];

    for (let i = 0; i < game.enemyData.length; i++) {
        const data = game.enemyData[i];
        let enemy = createSprite('tear_drop_drone', 270, [new BulletFiring(2000)]);

        switch (data.type) {
            case "drone":
                enemy.behaviors.push(new DroneBehavior(500, 80));
                break;
            case "sine":
                enemy.behaviors.push(new SineBehavior(-100));
                break;
            default:
                break;
        }

        // Basic setup
        enemy.left = data.left;
        enemy.top = data.top;
        enemy.collider = true;
        enemy.type = data.type;

        game.enemies.push(enemy);
        game.sprites.push(enemy);
    }
}
