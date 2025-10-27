// obstacles.js

function createObstacles(game) {
    const obstacleData = [
        { left: 500, top: 180 },
        { left: 900, top: 220 },
        { left: 1300, top: 160 }
    ];

    game.obstacles = [];

    for (let i = 0; i < obstacleData.length; i++) {
        // dummy behavior on obstacle because without one it won't render
        let obstacle = createSprite("asteroid", 0, [new CycleBehavior(0, 0)]);

        // object properties
        obstacle.left = obstacleData[i].left;
        obstacle.top = obstacleData[i].top;
        obstacle.width = 83;
        obstacle.height = 79;
        obstacle.hOffset = 0;
        obstacle.velocityX = 25; // scroll speed like power-ups
        obstacle.collider = true; // mark as collidable

        game.obstacles.push(obstacle);
        game.sprites.push(obstacle);
    }

    game.checkObstacleCollisions = function () {
        const player = this.player;
        if (!player || !this.obstacles) return;

        for (let i = 0; i < this.obstacles.length; i++) {
            const o = this.obstacles[i];
            const obstacleLeft = o.left - o.hOffset;

            // AABB collision detection
            if (o.collider &&
                player.left < obstacleLeft + o.width &&
                player.left + player.width > obstacleLeft &&
                player.top < o.top + o.height &&
                player.top + player.height > o.top) {

                this.resolveObstacleCollision(player, o); // handle collision
            }
        }
    };

    game.resolveObstacleCollision = function (player, obstacle) {
        const playerRight = player.left + player.width;
        const playerBottom = player.top + player.height;
        const obstacleRight = obstacle.left + obstacle.width;
        const obstacleBottom = obstacle.top + obstacle.height;

        const overlapLeft = playerRight - obstacle.left;
        const overlapRight = obstacleRight - player.left;
        const overlapTop = playerBottom - obstacle.top;
        const overlapBottom = obstacleBottom - player.top;

        // determine the smallest overlap on each axis
        const overlapX = overlapLeft < overlapRight ? overlapLeft : -overlapRight;
        const overlapY = overlapTop < overlapBottom ? overlapTop : -overlapBottom;

        // push the player the shorter distance out of the obstacle
        if (Math.abs(overlapX) < Math.abs(overlapY)) {
            player.left -= overlapX;
        } else {
            player.top -= overlapY;
        }
    };
}