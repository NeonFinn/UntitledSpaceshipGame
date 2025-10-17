let SPRITE_JSON_PATH = "images/spritesheet.json";
let SPRITE_SHEET_PATH = "images/spritesheet.png";
let spriteData;
let spriteSheet = new Image();

// Initialize the spritesheet
spriteSheet.src = SPRITE_SHEET_PATH;

// Read the JSON and turn it into a sprite data object.
fetch(SPRITE_JSON_PATH)
    .then(res => res.text())
    .then(data => {
        spriteData = JSON.parse(data);
    })
    .catch((error) => console.log(error));

