function createEnemies(game) {
    // Defines initial spawn points and enemy types
    game.enemyData = [
        {left: 400, top: 100, type: "drone"},
        {left: 500, top: 160, type: "sine"},
        {left: 600, top: 220, type: "follow"},
        {left: 700, top: 260, type: "shield"}
    ];

    game.enemies = [];

    for (let i = 0; i < game.enemyData.length; i++) {
        const data = game.enemyData[i];
        let enemy = createSprite('tear_drop_drone', 270);

        switch (data.type) {
            case "drone":
                enemy = createSprite('tear_drop_drone', 270, [new DroneBehavior(500, 80)]);
                enemy.health = 1;
                break;
            case "sine":
                enemy = createSprite('tear_drop', 270, [new BulletFiring(1000), new SineBehavior(100)]);
                enemy.health = 2;
                break;
            case "follow":
                enemy = createSprite('sparrow', 270, [new FollowBehavior(60, 20)]);
                enemy.health = 3;
                break;
            case "shield":
                enemy = createSprite('bat', 270, [new ShieldBehavior(100)]);
                enemy.health = 10;
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
