// enemies.js – updated with movement patterns (Christian Angel’s section)

function createEnemies(game) {
    // Define initial spawn points and enemy types
    game.enemyData = [
        { left: 400, top: 100, type: "wander" },
        { left: 500, top: 160, type: "sine" },
        { left: 600, top: 220, type: "seeker" },
        { left: 700, top: 260, type: "dasher" }
    ];
    
    game.enemies = [];

    for (let i = 0; i < game.enemyData.length; i++) {
        const data = game.enemyData[i];
        const enemy = createSprite('tear_drop_drone', 270);

        // Basic setup
        enemy.left = data.left;
        enemy.top = data.top;
        enemy.width = 32;
        enemy.height = 32;
        enemy.collider = true;
        enemy.type = data.type;

        // Movement data
        enemy.velocityX = -40;
        enemy.velocityY = 0;
        enemy.timer = 0;
        enemy.amplitude = 40;
        enemy.frequency = 4;
        enemy.chargeTime = 1.2;
        enemy.dashTime = 0.35;
        enemy.dashSpeed = 250;
        enemy.state = "charge";
        enemy.stateTimer = 0;
        enemy.dashDirX = 0;
        enemy.dashDirY = 0;

        // === Pattern update logic ===
        enemy.update = function(now, fps, context, lastTime) {
            const dt = (now - lastTime) / 1000;
            this.timer += dt;
            this.stateTimer += dt;

            if (this.type === "wander") {
                // Random drifting pattern
                if (this.timer > 1.2) {
                    const angle = Math.random() * Math.PI * 2;
                    this.velocityX = Math.cos(angle) * 40;
                    this.velocityY = Math.sin(angle) * 40;
                    this.timer = 0;
                }
                this.left += this.velocityX * dt;
                this.top += this.velocityY * dt;
            }

            else if (this.type === "sine") {
                // Moves left while oscillating vertically
                this.left -= 60 * dt * 1.5;
                this.top += Math.sin(this.timer * this.frequency) * dt * this.amplitude;
            }

            else if (this.type === "seeker") {
                // Follows player position slowly
                const dx = game.player.left - this.left;
                const dy = game.player.top - this.top;
                const dist = Math.hypot(dx, dy) || 1;
                this.velocityX = (dx / dist) * 60;
                this.velocityY = (dy / dist) * 60;
                this.left += this.velocityX * dt;
                this.top += this.velocityY * dt;
            }

            else if (this.type === "dasher") {
                // Waits, then dashes straight toward player
                if (this.state === "charge") {
                    this.left -= 40 * dt; // slow move
                    if (this.stateTimer >= this.chargeTime) {
                        this.state = "dash";
                        this.stateTimer = 0;
                        const dx = game.player.left - this.left;
                        const dy = game.player.top - this.top;
                        const d = Math.hypot(dx, dy) || 1;
                        this.dashDirX = dx / d;
                        this.dashDirY = dy / d;
                    }
                } else if (this.state === "dash") {
                    this.left += this.dashDirX * this.dashSpeed * dt;
                    this.top += this.dashDirY * this.dashSpeed * dt;

                    if (this.stateTimer >= this.dashTime) {
                        this.state = "charge";
                        this.stateTimer = 0;
                    }
                }
            }
        };

        game.enemies.push(enemy);
        game.sprites.push(enemy);
    }
}
