// backgroundplanets.js

function createBackgroundPlanets(game) {
    const planetData = [
        { filename: "blue_planet", left: 600, top: 100, velocityX: 20 },
        { filename: "dark_purple_planet", left: 1000, top: 150, velocityX: 15 },
        { filename: "light_blue_planet", left: 1800, top: 120, velocityX: 18 },
        { filename: "orange_red_planet", left: 3000, top: 170, velocityX: 22 },
        { filename: "purple_planet", left: 4000, top: 140, velocityX: 16 }
    ];

    for (let i = 0; i < planetData.length; i++) {
        let data = planetData[i];
        let planet = createSprite(data.filename, 0, []);

        planet.left = data.left;
        planet.top = data.top;
        planet.width = 0;
        planet.height = 0;
        planet.hOffset = 0;
        planet.velocityX = data.velocityX;
        planet.opacity = 0.3; // makes it obvious it's a background element

        game.backgroundPlanets = game.backgroundPlanets || [];
        game.backgroundPlanets.push(planet);
        game.sprites.push(planet);
    }
}
