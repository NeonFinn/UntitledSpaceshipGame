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
    this.SHOTS_INTERVAL = 200;
    this.SHORT_DELAY = 50; // lmao

    this.POWER_UP_CYCLE_DURATION = 100;

    // Background information
    this.background = new Image();
    this.backgroundOffset = 0;
    this.backgroundVelocity = 42;

    // Fog information
    this.fog = new Image();
    this.fog.src = "images/fog.png";
    this.fogOffset = 0;
    this.fogVelocity = 15;
    this.fogOpacity = 0.2;

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
    this.shots = [];
    this.enemies = [];

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
    };

    this.collideBehavior = {
        isCandidateForCollision: function (sprite, otherSprite) {
            let spriteCollisionRect = sprite.calculateCollisionRectangle();
            let otherCollisionRect = otherSprite.calculateCollisionRectangle();

            return sprite !== otherSprite && sprite.visible && otherSprite.visible && otherCollisionRect.left < spriteCollisionRect.right;
        },

        didCollide: function (sprite, otherSprite, context) {
            let spriteCollisionRect = sprite.calculateCollisionRectangle();
            let otherCollisionRect = otherSprite.calculateCollisionRectangle();

            context.beginPath();
            context.rect(otherCollisionRect.left, otherCollisionRect.top, otherCollisionRect.right - otherCollisionRect.left, otherCollisionRect.bottom - otherCollisionRect.top);

            return context.isPointInPath(spriteCollisionRect.left, spriteCollisionRect.top) ||
                context.isPointInPath(spriteCollisionRect.right, spriteCollisionRect.top) ||
                context.isPointInPath(spriteCollisionRect.centerX, spriteCollisionRect.centerY) ||
                context.isPointInPath(spriteCollisionRect.left, spriteCollisionRect.bottom) ||
                context.isPointInPath(spriteCollisionRect.right, spriteCollisionRect.bottom);
        },

        processCollision: function (sprite, otherSprite) {
            if (sprite.type === 'sparrow_drone') {
                if (otherSprite.type.includes('power_up')) {
                    this.processPowerUpCollision(sprite, otherSprite);
                } else if (otherSprite.type === 'follow' || otherSprite.type === 'shot' || otherSprite.type === 'drone' || otherSprite.type === 'sine' || otherSprite.type === 'asteroid') {
                    this.processShipHitCollision(sprite);
                }
            } else if (sprite.type === 'playerShot') {
                if (otherSprite.health !== undefined) { // process if enemy has health
                    this.processBulletCollision(sprite, otherSprite);
                }
            }
        },

        processPowerUpCollision: function (sprite, otherSprite) {
            let color = otherSprite.type.split('_', 1)[0];

            otherSprite.visible = false;

            switch (color) {
                case 'red':
                    if (sprite.weaponStage < 2) sprite.weaponStage++;
                    break;
                case 'blue':
                    if (sprite.movementStage < 2) sprite.movementStage++;
                    break;
                case 'green':
                    if (sprite.health < 3) sprite.health++;
                    if (sprite.health > 3) sprite.health = 3;
                    break;
                case 'yellow':
                    if (sprite.bulletStage < 2) sprite.bulletStage++;
                    break;
                default:
                    break;
            }
        },

        processShipHitCollision: function (sprite) {
            spaceshipGame.takePlayerDamage(1);
        },

        processBulletCollision: function (sprite, otherSprite) {
            otherSprite.health -= 1;
            console.log("Enemy hit! Remaining health: " + otherSprite.health);
            sprite.visible = false;

            if (otherSprite.health <= 0) {
                otherSprite.visible = false;
                console.log("Enemy destroyed!");
            }
        },

        execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
            let otherSprite;

            for (let i = 0; i < spaceshipGame.sprites.length; ++i) {
                otherSprite = spaceshipGame.sprites[i];

                if (this.isCandidateForCollision(sprite, otherSprite)) {
                    if (this.didCollide(sprite, otherSprite, context)) {
                        this.processCollision(sprite, otherSprite);
                    }
                }
            }
        }
    };

    this.checkMovementPowerUpBehavior = {
        execute: function (sprite, now, fps, context, lastAnimationFrameTime) {
            switch (sprite.movementStage) {
                case 2:
                    sprite.velocityX = 100;
                    sprite.velocityY = 100;
                    break;
                case 1:
                    sprite.velocityX = 75;
                    sprite.velocityY = 75;
                    break;
                default:
                    sprite.velocityX = 50;
                    sprite.velocityY = 50;
                    break;
            }
        }
    };
}

SpaceshipGame.prototype = {
    load: function () {
        this.initializeImages();
        this.createSprites();
    },

    initializeImages: function () {
        // background image
        this.background.src = this.BACKGROUND_PATH;
        this.loadingGifElement.src = this.LOADING_GIF_PATH;

        this.background.onload = function () {
            spaceshipGame.backgroundLoaded();
        }

        // loading gif image
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

        createBackgroundPlanets(this); // handled by backgroundplanets.js

        createPowerUps(this);  // handled by powerups.js
        createEnemies(this);

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

        this.player = createSprite("sparrow_drone", 90, [this.playerMovement, this.collideBehavior, this.checkMovementPowerUpBehavior]);

        this.player.y = STARTING_HEIGHT;
        this.player.top = STARTING_HEIGHT - PLAYER_HEIGHT;
        this.player.left = PLAYER_LEFT;
        this.player.velocityX = 50;
        this.player.velocityY = 50;
        this.player.width = 32;
        this.player.height = PLAYER_HEIGHT;
        this.player.weaponStage = 0;  // For weapon power (multiple bullets)
        this.player.movementStage = 0;  // For movement speed
        this.player.bulletStage = 0;  // For bullet speed
        this.player.health = 3;
        this.player.lastDamageTime = 0;
        this.player.damageCooldown = 2000; // milliseconds
        this.player.flashing = false;
        this.player.timeStartFlash = 0;
        this.player.flashDuration = 2000; // milliseconds

        this.player.collisionMargin = {
            left: 6,
            right: 8,
            top: 6,
            bottom: 6
        }

        this.sprites.push(this.player);
    },

    drawBackground: function () {
        // draw background
        this.context.translate(-this.backgroundOffset, 0);
        this.context.drawImage(this.background, 0, 0);
        this.context.drawImage(this.background, this.background.width, 0);
        this.context.translate(this.backgroundOffset, 0);

        // draw fog layer
        this.context.save();
        this.context.globalAlpha = this.fogOpacity;

        // draw fog images in a loop so there are no gaps
        let fogX = -this.fogOffset % this.fog.width;
        for (let x = fogX; x < this.canvas.width; x += this.fog.width) {
            this.context.drawImage(this.fog, x, 0);
        }

        this.context.restore(); // resets globalAlpha so it doesn't affect other drawings
    },

    setOffsets: function (now) {
        this.setBackgroundOffset(now);
        this.setSpriteOffsets(now);
    },

    setBackgroundOffset: function (now) {
        // main background
        this.backgroundOffset += this.backgroundVelocity * (now - this.lastAnimationFrameTime) / 1000;

        if (this.backgroundOffset < 0 || this.backgroundOffset > this.background.width) {
            this.backgroundOffset = 0;
        }

        // fog layer
        this.fogOffset += this.fogVelocity * (now - this.lastAnimationFrameTime) / 1000;
        if (this.fogOffset < 0 || this.fogOffset > this.fog.width) {
            this.fogOffset = 0;
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

                // if player.flashing is true, make the player sprite flash
                if (sprite === this.player && this.player.flashing) {
                    let now = Date.now();
                    if (now - this.player.lastDamageTime < this.player.flashDuration) {
                        // alternate alpha between 0.05 and 1 every 200ms to create flashing effect (i had to look up how to do this lol)
                        this.context.globalAlpha = (Math.floor((now - this.player.lastDamageTime) / 200) % 2 === 0) ? 0.05 : 1;
                    }
                    else {
                        // stop flashing
                        this.context.globalAlpha = 1;
                        this.player.flashing = false;
                    }
                }
                else {
                    this.context.globalAlpha = 1;
                }

                // draw sprite
                sprite.draw(this.context);
                sprite.drawCollisionRectangle(this.context);
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
    },

    takePlayerDamage: function (damage) {
        if (!this.player) return;

        let now = Date.now();

        if (now - this.player.lastDamageTime < this.player.damageCooldown) {
            return; // cooldown not yet passed
        }

        this.player.flashing = true;
        this.player.lastDamageTime = now;

        this.player.health -= damage;
        this.revealToast("Player took " + damage + " damage!", 3000);
        console.log("Player health: " + this.player.health);

        if (this.player.health <= 0) {
            this.killPlayer();
        }
    },

    killPlayer: function () {
        console.log("Player has been killed!");
        this.player.visible = false;
        this.player.dead = true;
        this.player = null;

        this.revealToast("Game Over!", 3000);
    },
};

window.onkeydown = function (event) {
    let key = event.key;

    if (key === 'p' || key === 'Escape') {
        spaceshipGame.togglePaused();
    }
    if (key === 'j' || key === 'z' || key === ' ') {
        playerShoot(spaceshipGame);
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