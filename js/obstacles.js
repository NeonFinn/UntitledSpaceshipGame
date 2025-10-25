// obstacles.js

function createObstacles(game) {
    const obstacleData = [
        { left: 500, top: 180 },
        { left: 900, top: 220 },
        { left: 1300, top: 160 }
    ];

    game.obstacles = [];

    for (let i = 0; i < obstacleData.length; i++) {

        // Give each obstacle a dummy behavior because it was breaking movement without one
        let obstacle = createSprite("asteroid", 0, [new CycleBehavior(0, 0)]);
        obstacle.velocityX = 25; // scroll speed like power-ups
        obstacle.hOffset = 0;
        obstacle.left = obstacleData[i].left;
        obstacle.top = obstacleData[i].top;

        game.obstacles.push(obstacle);
        game.sprites.push(obstacle);
    }
}
