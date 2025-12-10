function createEnemies(game) {
    // Defines initial spawn points and enemy types
    game.enemyData = [
        { left: 400, top: 100, type: "drone" },
        { left: 700, top: 300, type: "follow" },
        { left: 1050, top: 150, type: "shield" },
        { left: 1400, top: 400, type: "sine" },
        { left: 1750, top: 100, type: "drone" },
        { left: 2100, top: 350, type: "sine" },
        { left: 2450, top: 200, type: "follow" },
        { left: 2800, top: 450, type: "shield" },
        { left: 3150, top: 50, type: "sine" },
        { left: 3500, top: 300, type: "drone" },
        { left: 3850, top: 150, type: "shield" },
        { left: 4200, top: 400, type: "follow" },
        { left: 4550, top: 100, type: "drone" },
        { left: 4850, top: 350, type: "shield" },
        { left: 5000, top: 200, type: "sine" },

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
