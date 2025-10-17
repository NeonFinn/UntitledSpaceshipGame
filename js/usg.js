import("/js/sprites.js");

let SpaceshipGame = function () {
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");

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
    this.BACKGROUND_PATH = "/images/background.png";
    this.LOADING_GIF_PATH = "/images/loading.gif";

    this.ANIMATION_RATE = 30;

    this.PAUSED_CHECK_INTERVAL = 200;
    this.SHORT_DELAY = 50; // lmao

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

    },

    drawBackground: function () {
        this.context.translate(-this.backgroundOffset, 0);

        this.context.drawImage(this.background, 0, 0);
        this.context.drawImage(this.background, this.background.width, 0);

        this.context.translate(this.backgroundOffset, 0);
    },

    setOffsets: function (now) {
        this.setBackgroundOffset(now);
    },

    setBackgroundOffset: function (now) {
        this.backgroundOffset += this.backgroundVelocity * (now - this.lastAnimationFrameTime) / 1000;

        if (this.backgroundOffset < 0 || this.backgroundOffset > this.background.width) {
            this.backgroundOffset = 0;
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
        let fps = 1 / (now - this.lastAnimationFrameTime * 1000);

        if (now - this.lastFpsUpdateTime > 1000) {
            this.lastFpsUpdateTime = now;
            this.fpsElement.innerHTML = fps.toFixed(0) + ' fps';
        }

        return fps;
    },

    draw: function (now) {
        this.setOffsets(now);

        this.drawBackground();
    }
};

window.onkeydown = function (event) {
    let key = event.key;

    if (key === 'p') {
        spaceshipGame.togglePaused();
    }
}

let spaceshipGame = new SpaceshipGame();

spaceshipGame.load();