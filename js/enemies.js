function createEnemies(game) {
    // Defines initial spawn points and enemy types
    game.enemyData = [
        { left: 600, top: 100, type: "drone" },
        { left: 600, top: 250, type: "sine" },
        { left: 800, top: 350, type: "follow" },
        { left: 1000, top: 50, type: "drone" },
        { left: 1200, top: 300, type: "shield" },
        { left: 1400, top: 200, type: "follow" },
        { left: 1600, top: 350, type: "sine" },
        { left: 1800, top: 150, type: "drone" },
        { left: 2000, top: 50, type: "sine" },
        { left: 2200, top: 300, type: "drone" },
        { left: 2400, top: 50, type: "shield" },
        { left: 2600, top: 200, type: "follow" },
        { left: 2800, top: 150, type: "drone" },
        { left: 3000, top: 350, type: "shield" },
        { left: 3200, top: 200, type: "sine" },
        { left: 3400, top: 100, type: "follow" },
        { left: 3600, top: 350, type: "drone" },
        { left: 3800, top: 175, type: "sine" },
        { left: 4000, top: 100, type: "drone" },
        { left: 4200, top: 200, type: "shield" },
        { left: 4400, top: 100, type: "drone" },
        { left: 4600, top: 350, type: "follow" },
        { left: 4800, top: 150, type: "sine" },
    ];

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
        enemy.velocityX = 25;

        game.enemies.push(enemy);
        game.sprites.push(enemy);
    }
}
