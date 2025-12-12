function createEnemies(game) {
    // Defines initial spawn points and enemy types
    game.enemyData = [
    // phase 1 (spawn to dark purple planet)
        { left: 700, top: 100, type: "drone" },
        { left: 900, top: 300, type: "drone" },
        { left: 1100, top: 50, type: "sine" },
        { left: 1400, top: 200, type: "drone" },
        { left: 1500, top: 150, type: "follow" },
        { left: 1600, top: 350, type: "sine" },

        // phase 2 (dark purple planet to light blue planet)
        { left: 1800, top: 200, type: "follow" },
        { left: 1900, top: 100, type: "drone" },
        { left: 2000, top: 50, type: "sine" },
        { left: 2100, top: 250, type: "drone" },
        { left: 2200, top: 300, type: "follow" },
        { left: 2250, top: 200, type: "sine" },
        { left: 2300, top: 150, type: "drone" },
        { left: 2400, top: 50, type: "follow" },
        { left: 2450, top: 250, type: "sine" },
        { left: 2500, top: 350, type: "drone" },
        { left: 2600, top: 200, type: "follow" },

        // phase 3 (light blue planet to orange red planet)
        { left: 2700, top: 100, type: "sine" },
        { left: 2750, top: 250, type: "shield" },
        { left: 2800, top: 150, type: "follow" },
        { left: 2850, top: 300, type: "sine" },
        { left: 2900, top: 250, type: "drone" },
        { left: 2950, top: 300, type: "sine" },
        { left: 3000, top: 350, type: "shield" },
        { left: 3100, top: 100, type: "follow" },
        { left: 3200, top: 200, type: "sine" },
        { left: 3250, top: 150, type: "drone" },
        { left: 3300, top: 300, type: "shield" },
        { left: 3350, top: 250, type: "sine" },
        { left: 3400, top: 100, type: "follow" },
        { left: 3450, top: 150, type: "drone" },
        { left: 3500, top: 250, type: "sine" },
        { left: 3550, top: 200, type: "shield" },
        { left: 3600, top: 350, type: "drone" },

        // phase 4 (orange red planet to purple planet)
        { left: 3800, top: 175, type: "sine" },
        { left: 3825, top: 250, type: "drone" },
        { left: 3850, top: 150, type: "shield" },
        { left: 3900, top: 300, type: "follow" },
        { left: 3950, top: 200, type: "sine" },
        { left: 4000, top: 100, type: "drone" },
        { left: 4050, top: 300, type: "follow" },
        { left: 4075, top: 150, type: "shield" },
        { left: 4100, top: 250, type: "sine" },
        { left: 4150, top: 150, type: "drone" },
        { left: 4200, top: 200, type: "shield" },
        { left: 4225, top: 350, type: "follow" },
        { left: 4250, top: 100, type: "sine" },
        { left: 4300, top: 350, type: "follow" },
        { left: 4350, top: 150, type: "drone" },
        { left: 4400, top: 100, type: "shield" },
        { left: 4450, top: 300, type: "sine" },
        { left: 4500, top: 200, type: "follow" },
        { left: 4500, top: 250, type: "shield" },
        { left: 4550, top: 200, type: "drone" },
        { left: 4600, top: 350, type: "follow" },
        { left: 4650, top: 100, type: "sine" },
        { left: 4700, top: 150, type: "shield" },
        { left: 4700, top: 200, type: "drone" },
        { left: 4750, top: 100, type: "follow" },
        { left: 4750, top: 300, type: "drone" },
        { left: 4800, top: 150, type: "sine" },
        { left: 4850, top: 300, type: "drone" },
        { left: 4900, top: 250, type: "shield" },
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
