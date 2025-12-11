// backgroundplanets.js

function createBackgroundPlanets(game) {
    const planetData = [
        { filename: "blue_planet", left: 600, top: 100, velocityX: 25 },
        { filename: "dark_purple_planet", left: 1600, top: 150, velocityX: 25 },
        { filename: "light_blue_planet", left: 2600, top: 120, velocityX: 25 },
        { filename: "orange_red_planet", left: 3600, top: 170, velocityX: 25 },
        { filename: "purple_planet", left: 4600, top: 140, velocityX: 25 }
    ];

    for (let i = 0; i < planetData.length; i++) {
        let data = planetData[i];
        let planet = createSprite(data.filename, 0, []);

        planet.left = data.left;
        planet.top = data.top;
        planet.width = 200;
        planet.height = 0;
        planet.hOffset = 0;
        planet.velocityX = data.velocityX;
        planet.opacity = 0.3; // makes it obvious it's a background element
        planet.isBackground = true; // mark as background element

        game.backgroundPlanets = game.backgroundPlanets || [];
        game.backgroundPlanets.push(planet);
        game.sprites.push(planet);
    }
}
