// usg.js - Spaceship Game Main File

let SpaceshipGame = function () {
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    this.keys = [];

    // HTML elements
    this.fpsElement = document.getElementById("fps");
    this.toastElement = document.getElementById("toast");
    this.instructionsElement = document.getElementById("instructions");
    this.scoreElement = document.getElementById("score");
    this.soundAndMusicElement = document.getElementById("sound-music");
    this.loadingElement = document.getElementById("loading");
    this.loadingGifElement = document.getElementById("loading-gif");
    this.loadingTitleElement = document.getElementById("loading-title");

    // Constants
    this.BACKGROUND_PATH = "images/background.png";
    this.LOADING_GIF_PATH = "images/loading.gif";

    this.ANIMATION_RATE = 30;

    this.PAUSED_CHECK_INTERVAL = 200;
    this.SHORT_DELAY = 50; // lmao

    this.POWER_UP_CYCLE_DURATION = 100;

    // Background information
    this.background = new Image();
    this.backgroundOffset = 0;
    this.backgroundVelocity = 42;

    // Time information
    this.lastAnimationFrameTime = 0;
    this.lastFpsUpdateTime = 0;
    this.fps = 60;

    // States
    this.paused = false;
    this.windowHasFocus = true;
    this.countdownInProgress = false;
    this.gameStarted = false;

    // Sprites
    this.powerUps = [];
    this.sprites = [];

    // Behaviors
    this.playerMovement = {
        setPosition: function (sprite, now, lastAnimationFrameTime) {
            let pixelsToMoveX = (now - lastAnimationFrameTime) / 1000;
            let pixelsToMoveY = (now - lastAnimationFrameTime) / 1000;

            if (spaceshipGame.keys['a'] || spaceshipGame.keys['ArrowLeft'] || spaceshipGame.keys['d'] || spaceshipGame.keys['ArrowRight']) {
                pixelsToMoveX *= sprite.velocityX;
            }

            if (spaceshipGame.keys['w'] || spaceshipGame.keys['ArrowUp'] || spaceshipGame.keys['s'] || spaceshipGame.keys['ArrowDown']) {
                pixelsToMoveY *= sprite.velocityY;
            }

            if (spaceshipGame.keys['a'] || spaceshipGame.keys['ArrowLeft']) {
                sprite.left -= pixelsToMoveX;
            }

            if (spaceshipGame.keys['d'] || spaceshipGame.keys['ArrowRight']) {
                sprite.left += pixelsToMoveX;
            }

            if (spaceshipGame.keys['w'] || spaceshipGame.keys['ArrowUp']) {
                sprite.top -= pixelsToMoveY;
            }

            if (spaceshipGame.keys['s'] || spaceshipGame.keys['ArrowDown']) {
                sprite.top += pixelsToMoveY;
            }

            spaceshipGame.checkObstacleCollisions();
        },

        execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
            this.setPosition(sprite, now, lastAnimationFrameTime);
        }
    }
}

SpaceshipGame.prototype = {
    load: function () {
        this.initializeImages();
        this.createSprites();
    },

    initializeImages: function () {
        this.background.src = this.BACKGROUND_PATH;
        this.loadingGifElement.src = this.LOADING_GIF_PATH;

        this.background.onload = function () {
            spaceshipGame.backgroundLoaded();
        }

        this.loadingGifElement.onload = function () {
            spaceshipGame.loadingAnimationLoaded();
        }
    },

    backgroundLoaded: function () {
        let LOADING_TRANSITION_DURATION = 2000;

        this.fadeOutElements(this.loadingElement, LOADING_TRANSITION_DURATION);

        setTimeout(function () {
            spaceshipGame.start();
            spaceshipGame.gameStarted = true;
        }, LOADING_TRANSITION_DURATION);
    },

    loadingAnimationLoaded: function () {
        if (!this.gameStarted) {
            this.fadeInElements(this.loadingGifElement, this.loadingTitleElement);
        }
    },

    fadeInElements: function (...args) {
        for (let i = 0; i < args.length; i++) {
            args[i].style.display = "block";
        }

        setTimeout(function () {
            for (let i = 0; i < args.length; i++) {
                args[i].style.opacity = 1;
            }
        }, this.SHORT_DELAY);
    },

    fadeOutElements: function (...args) {
        let fadeDuration = args.pop();

        for (let i = 0; i < args.length; i++) {
            args[i].style.opacity = 0;
        }

        setTimeout(function () {
            for (let i = 0; i < args.length; i++) {
                args[i].style.display = "none";
            }
        }, fadeDuration);
    },

    start: function () {
        this.revealGame();
        this.revealInitialToast();
        requestAnimationFrame(this.animate);
    },

    revealGame: function () {
        let DIM_CONTROLS_DELAY = 5000;

        this.revealTopChromeDimmed();
        this.revealCanvas();
        this.revealBottomChrome();

        setTimeout(function () {
            spaceshipGame.dimControls();
            spaceshipGame.revealTopChrome();
        }, DIM_CONTROLS_DELAY);
    },

    revealTopChromeDimmed: function () {
        let DIM = 0.25;

        this.scoreElement.style.display = "block";
        this.fpsElement.style.display = "block";

        setTimeout(function () {
            spaceshipGame.scoreElement.style.opacity = DIM;
            spaceshipGame.fpsElement.style.opacity = DIM;
        }, this.SHORT_DELAY);
    },

    revealCanvas: function () {
        this.fadeInElements(this.canvas);
    },

    revealBottomChrome: function () {
        this.fadeInElements(this.soundAndMusicElement, this.instructionsElement);
    },

    dimControls: function () {
        let FINAL_OPACITY = 0.5;

        spaceshipGame.instructionsElement.style.opacity = FINAL_OPACITY;
        spaceshipGame.soundAndMusicElement.style.opacity = FINAL_OPACITY;
    },

    revealTopChrome: function () {
        this.fadeInElements(this.fpsElement, this.scoreElement);
    },

    revealInitialToast: function () {
        let INITIAL_TOAST_DELAY = 1500;
        let INITIAL_TOAST_DURATION = 3000;

        setTimeout(function () {
            spaceshipGame.revealToast('*StarFox Voice* Good luck!', INITIAL_TOAST_DURATION);
        }, INITIAL_TOAST_DELAY);
    },

    revealToast: function (text, duration) {
        let DEFAULT_TOAST_DURATION = 1000;

        duration = duration || DEFAULT_TOAST_DURATION;

        this.startToastTransition(text);

        setTimeout(function () {
            spaceshipGame.hideToast();
        }, duration);
    },

    startToastTransition: function (text) {
        this.toastElement.innerHTML = text;
        this.fadeInElements(this.toastElement);
    },

    hideToast: function () {
        let TOAST_TRANSITION_DURATION = 450;

        this.fadeOutElements(this.toastElement, TOAST_TRANSITION_DURATION);
    },

    createSprites: function () {
        this.createPlayerSprite();

        createBluePowerUps(this);  // handled by powerups.js
        createRedPowerUps(this);
        createGreenPowerUps(this);
        createEnemies(this);

        setupPowerUpCollisions(this); // handled by powerups.js

        createObstacles(this); // handled by obstacles.js

        this.addSpritesToSpriteArray();
    },

    initializeSprites: function () {
        this.positionSprites(this.powerUps, this.powerUpData);
        this.positionSprites(this.enemies, this.enemyData);
    },

    addSpritesToSpriteArray: function () {
        for (let i = 0; i < this.powerUps.length; i++) {
            this.sprites.push(this.powerUps[i]);
        }
    },

    positionSprites: function (sprites, data) {
        let sprite;

        for (let i = 0; i < sprites.length; i++) {
            sprite = sprites[i];

            sprite.top = data[i].top;
            sprite.left = data[i].left;
        }
    },

    createPlayerSprite: function () {
        let PLAYER_LEFT = 50;
        let PLAYER_HEIGHT = 32;
        let STARTING_HEIGHT = 200;

        this.player = createSprite("sparrow_drone", 90, [this.playerMovement]);

        this.player.y = STARTING_HEIGHT;
        this.player.top = STARTING_HEIGHT - PLAYER_HEIGHT;
        this.player.left = PLAYER_LEFT;
        this.player.velocityX = 50;
        this.player.velocityY = 50;
        this.player.width = 32;
        this.player.height = PLAYER_HEIGHT;

        this.sprites.push(this.player);
    },

    createPowerUpSprites: function () {
        createBluePowerUps(this);  // now handled by powerups.js
        createRedPowerUps(this);
        createRedPowerUps(this);
    },

    drawBackground: function () {
        this.context.translate(-this.backgroundOffset, 0);

        this.context.drawImage(this.background, 0, 0);
        this.context.drawImage(this.background, this.background.width, 0);

        this.context.translate(this.backgroundOffset, 0);
    },

    setOffsets: function (now) {
        this.setBackgroundOffset(now);
        this.setSpriteOffsets(now);
    },

    setBackgroundOffset: function (now) {
        this.backgroundOffset += this.backgroundVelocity * (now - this.lastAnimationFrameTime) / 1000;

        if (this.backgroundOffset < 0 || this.backgroundOffset > this.background.width) {
            this.backgroundOffset = 0;
        }
    },

    setSpriteOffsets: function (now) {
        let sprite;

        for (let i = 0; i < this.sprites.length; i++) {
            sprite = this.sprites[i];

            if (sprite.type === "sparrow_drone") continue;

            if (sprite.velocityX) {
                sprite.hOffset += sprite.velocityX * (now - this.lastAnimationFrameTime) / 1000;
            }
        }
    },

    animate: function (now) {
        if (spaceshipGame.paused) {
            setTimeout(function () {
                requestAnimationFrame(spaceshipGame.animate);
            }, spaceshipGame.PAUSED_CHECK_INTERVAL);
        } else {
            spaceshipGame.fps = spaceshipGame.calculateFps(now);
            spaceshipGame.draw(now);
            spaceshipGame.lastAnimationFrameTime = now;
            requestAnimationFrame(spaceshipGame.animate);
        }
    },

    calculateFps: function (now) {
        let fps = 1 / (now - this.lastAnimationFrameTime) * 1000;

        if (now - this.lastFpsUpdateTime > 1000) {
            this.lastFpsUpdateTime = now;
            this.fpsElement.innerHTML = fps.toFixed(0) + ' fps';
        }

        return fps;
    },

    draw: function (now) {
        this.setOffsets(now);

        this.drawBackground();
        this.updateSprites(now);
        this.drawSprites();
        this.checkObstacleCollisions();
        this.checkPowerUpCollisions();
    },

    updateSprites: function (now) {
        let sprite;

        for (let i = 0; i < this.sprites.length; i++) {
            sprite = this.sprites[i];

            if (sprite.visible && this.isSpriteInView(sprite)) {
                sprite.update(now, this.fps, this.context, this.lastAnimationFrameTime);

                if (sprite === this.player) {
                    this.checkObstacleCollisions();
                }
            }
        }
    },

    isSpriteInView: function (sprite) {
        return sprite.left + sprite.width > sprite.hOffset && sprite.left < sprite.hOffset + this.canvas.width;
    },

    drawSprites: function () {
        let sprite;

        for (let i = 0; i < this.sprites.length; i++) {
            sprite = this.sprites[i];

            if (sprite.visible && this.isSpriteInView(sprite)) {
                this.context.translate(-sprite.hOffset, 0);
                sprite.draw(this.context);
                this.context.translate(sprite.hOffset, 0);
            }
        }
    },

    togglePaused: function () {
        let now = +new Date();

        this.paused = !this.paused;

        if (this.paused) {
            this.pauseStartTime = now;
        } else {
            this.lastAnimationFrameTime += (now - this.pauseStartTime);
        }
    }
};

window.onkeydown = function (event) {
    let key = event.key;

    if (key === 'p' || key === 'Escape') {
        spaceshipGame.togglePaused();
    }
    if(key === 'j' || key === 'z' || key === ' '){
        playerShoot();
    }

    spaceshipGame.keys[key] = true;
};

window.onkeyup = function (event) {
    let key = event.key;

    spaceshipGame.keys[key] = false
}

window.onblur = function (event) {
    spaceshipGame.windowHasFocus = false;

    if (!spaceshipGame.paused) {
        spaceshipGame.togglePaused();
    }
};

window.onfocus = function (event) {
    let originalFont = spaceshipGame.toastElement.style.fontSize;
    let DIGIT_DISPLAY_DURATION = 1000;

    spaceshipGame.windowHasFocus = true;
    spaceshipGame.countdownInProgress = true;

    if (spaceshipGame.paused) {
        spaceshipGame.toastElement.style.fontSize = '128px';

        if (spaceshipGame.windowHasFocus && spaceshipGame.countdownInProgress) {
            spaceshipGame.revealToast('3', 500);
        }

        setTimeout(function () {
            if (spaceshipGame.windowHasFocus && spaceshipGame.countdownInProgress) {
                spaceshipGame.revealToast('2', 500);
            }

            setTimeout(function () {
                if (spaceshipGame.windowHasFocus && spaceshipGame.countdownInProgress) {
                    spaceshipGame.revealToast('1', 500);
                }

                setTimeout(function () {
                    if (spaceshipGame.windowHasFocus && spaceshipGame.countdownInProgress) {
                        spaceshipGame.togglePaused();
                        spaceshipGame.toastElement.style.fontSize = originalFont;
                    }

                    spaceshipGame.countdownInProgress = false;
                }, DIGIT_DISPLAY_DURATION);
            }, DIGIT_DISPLAY_DURATION);
        }, DIGIT_DISPLAY_DURATION);
    }
};

let spaceshipGame = new SpaceshipGame();

spaceshipGame.load();