// obstacles.js

function createObstacles(game) {
    let obstacleData = [
        {left: 450, top: 200},
        {left: 900, top: 300},
        {left: 1300, top: 150},
        {left: 1700, top: 50},
        {left: 2100, top: 200},
        {left: 2500, top: 300},
        {left: 2900, top: 250},
        {left: 3300, top: 100},
        {left: 3700, top: 150},
        {left: 4100, top: 50},
        {left: 4500, top: 200},
        {left: 4900, top: 150},
        {left: 5300, top: 300},
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
        const obstacleLeft = obstacle.left - obstacle.hOffset;
        const obstacleRight = obstacleLeft + obstacle.width;
        const obstacleTop = obstacle.top;
        const obstacleBottom = obstacleTop + obstacle.height;

        const playerCollisionRect = player.calculateCollisionRectangle()

        const playerLeft = playerCollisionRect.left;
        const playerRight = playerCollisionRect.right;
        const playerTop = playerCollisionRect.top;
        const playerBottom = player.top + player.height;

        // find overlap on both axes
        const overlapX = Math.min(playerRight, obstacleRight) - Math.max(playerLeft, obstacleLeft);
        const overlapY = Math.min(playerBottom, obstacleBottom) - Math.max(playerTop, obstacleTop);

        // if no overlap, return
        if (overlapX < 1 || overlapY < 1) return;

        // smallest overlap determines which axis to resolve
        if (overlapX < overlapY) {
            if (playerLeft < obstacleLeft) { // dont allow player to move through obstacle on X axis
                player.left -= overlapX; // push left
            } else {
                player.left += overlapX; // push right
            }
        } else {
            if (playerTop < obstacleTop) { // dont allow player to move through obstacle on Y axis
                player.top -= overlapY; // push up
            } else {
                player.top += overlapY; // push down
            }
        }
    };
}
    