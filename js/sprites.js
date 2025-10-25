let SPRITE_SHEET_PATH = "images/spritesheet.png";
let SPRITE_JSON_PATH = "images/spritesheet.json";
let spriteSheet = new Image();



// You have no idea how unhappy I am about having to do this.
let spriteJSON = '{\n' +
    '  "sprites": [\n' +
    '    {\n' +
    '      "filename": "asteroid",\n' +
    '      "frame": {\n' +
    '        "x": 11,\n' +
    '        "y": 11,\n' +
    '        "w": 83,\n' +
    '        "h": 79\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "explosion",\n' +
    '      "frames": [\n' +
    '        {\n' +
    '          "filename": "explosion-0",\n' +
    '          "frame": {\n' +
    '            "x": 106,\n' +
    '            "y": 11,\n' +
    '            "w": 6,\n' +
    '            "h": 6\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 31,\n' +
    '            "y": 30,\n' +
    '            "w": 6,\n' +
    '            "h": 6\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-1",\n' +
    '          "frame": {\n' +
    '            "x": 124,\n' +
    '            "y": 11,\n' +
    '            "w": 14,\n' +
    '            "h": 14\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 27,\n' +
    '            "y": 24,\n' +
    '            "w": 14,\n' +
    '            "h": 14\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-2",\n' +
    '          "frame": {\n' +
    '            "x": 150,\n' +
    '            "y": 11,\n' +
    '            "w": 16,\n' +
    '            "h": 17\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 26,\n' +
    '            "y": 22,\n' +
    '            "w": 16,\n' +
    '            "h": 17\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-3",\n' +
    '          "frame": {\n' +
    '            "x": 178,\n' +
    '            "y": 11,\n' +
    '            "w": 20,\n' +
    '            "h": 19\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 24,\n' +
    '            "y": 21,\n' +
    '            "w": 20,\n' +
    '            "h": 19\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-4",\n' +
    '          "frame": {\n' +
    '            "x": 210,\n' +
    '            "y": 11,\n' +
    '            "w": 22,\n' +
    '            "h": 23\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 23,\n' +
    '            "y": 19,\n' +
    '            "w": 22,\n' +
    '            "h": 23\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-5",\n' +
    '          "frame": {\n' +
    '            "x": 244,\n' +
    '            "y": 11,\n' +
    '            "w": 24,\n' +
    '            "h": 25\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 22,\n' +
    '            "y": 18,\n' +
    '            "w": 24,\n' +
    '            "h": 25\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-6",\n' +
    '          "frame": {\n' +
    '            "x": 280,\n' +
    '            "y": 11,\n' +
    '            "w": 26,\n' +
    '            "h": 27\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 21,\n' +
    '            "y": 17,\n' +
    '            "w": 26,\n' +
    '            "h": 27\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-7",\n' +
    '          "frame": {\n' +
    '            "x": 318,\n' +
    '            "y": 11,\n' +
    '            "w": 28,\n' +
    '            "h": 29\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 20,\n' +
    '            "y": 16,\n' +
    '            "w": 28,\n' +
    '            "h": 29\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-8",\n' +
    '          "frame": {\n' +
    '            "x": 358,\n' +
    '            "y": 11,\n' +
    '            "w": 30,\n' +
    '            "h": 29\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 19,\n' +
    '            "y": 16,\n' +
    '            "w": 30,\n' +
    '            "h": 29\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-9",\n' +
    '          "frame": {\n' +
    '            "x": 400,\n' +
    '            "y": 11,\n' +
    '            "w": 32,\n' +
    '            "h": 31\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 18,\n' +
    '            "y": 15,\n' +
    '            "w": 32,\n' +
    '            "h": 31\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-10",\n' +
    '          "frame": {\n' +
    '            "x": 444,\n' +
    '            "y": 11,\n' +
    '            "w": 34,\n' +
    '            "h": 33\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 17,\n' +
    '            "y": 14,\n' +
    '            "w": 34,\n' +
    '            "h": 33\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-11",\n' +
    '          "frame": {\n' +
    '            "x": 490,\n' +
    '            "y": 11,\n' +
    '            "w": 34,\n' +
    '            "h": 33\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 17,\n' +
    '            "y": 14,\n' +
    '            "w": 34,\n' +
    '            "h": 33\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-12",\n' +
    '          "frame": {\n' +
    '            "x": 536,\n' +
    '            "y": 11,\n' +
    '            "w": 36,\n' +
    '            "h": 34\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 16,\n' +
    '            "y": 13,\n' +
    '            "w": 36,\n' +
    '            "h": 34\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-13",\n' +
    '          "frame": {\n' +
    '            "x": 584,\n' +
    '            "y": 11,\n' +
    '            "w": 35,\n' +
    '            "h": 35\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 17,\n' +
    '            "y": 13,\n' +
    '            "w": 35,\n' +
    '            "h": 35\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-14",\n' +
    '          "frame": {\n' +
    '            "x": 631,\n' +
    '            "y": 11,\n' +
    '            "w": 37,\n' +
    '            "h": 36\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 16,\n' +
    '            "y": 12,\n' +
    '            "w": 37,\n' +
    '            "h": 36\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-15",\n' +
    '          "frame": {\n' +
    '            "x": 680,\n' +
    '            "y": 11,\n' +
    '            "w": 33,\n' +
    '            "h": 37\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 16,\n' +
    '            "y": 12,\n' +
    '            "w": 33,\n' +
    '            "h": 37\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "explosion-16",\n' +
    '          "frame": {\n' +
    '            "x": 725,\n' +
    '            "y": 11,\n' +
    '            "w": 31,\n' +
    '            "h": 30\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 17,\n' +
    '            "y": 17,\n' +
    '            "w": 31,\n' +
    '            "h": 30\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 64,\n' +
    '            "h": 64\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "fireball",\n' +
    '      "frame": {\n' +
    '        "x": 768,\n' +
    '        "y": 11,\n' +
    '        "w": 62,\n' +
    '        "h": 51\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 0,\n' +
    '        "y": 10,\n' +
    '        "w": 62,\n' +
    '        "h": 51\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "mine",\n' +
    '      "frame": {\n' +
    '        "x": 11,\n' +
    '        "y": 102,\n' +
    '        "w": 67,\n' +
    '        "h": 68\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 1,\n' +
    '        "y": 0,\n' +
    '        "w": 67,\n' +
    '        "h": 68\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 68,\n' +
    '        "h": 68\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "shot",\n' +
    '      "frame": {\n' +
    '        "x": 90,\n' +
    '        "y": 102,\n' +
    '        "w": 18,\n' +
    '        "h": 6\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": false,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 0,\n' +
    '        "y": 0,\n' +
    '        "w": 18,\n' +
    '        "h": 6\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 18,\n' +
    '        "h": 6\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "blue_planet",\n' +
    '      "frame": {\n' +
    '        "x": 120,\n' +
    '        "y": 102,\n' +
    '        "w": 183,\n' +
    '        "h": 182\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 143,\n' +
    '        "y": 32,\n' +
    '        "w": 183,\n' +
    '        "h": 182\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 342,\n' +
    '        "h": 256\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "dark_purple_planet",\n' +
    '      "frame": {\n' +
    '        "x": 315,\n' +
    '        "y": 102,\n' +
    '        "w": 272,\n' +
    '        "h": 271\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 100,\n' +
    '        "y": 15,\n' +
    '        "w": 272,\n' +
    '        "h": 271\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 439,\n' +
    '        "h": 310\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "light_blue_planet",\n' +
    '      "frame": {\n' +
    '        "x": 599,\n' +
    '        "y": 102,\n' +
    '        "w": 248,\n' +
    '        "h": 249\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 144,\n' +
    '        "y": 25,\n' +
    '        "w": 248,\n' +
    '        "h": 249\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 439,\n' +
    '        "h": 310\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "orange_red_planet",\n' +
    '      "frame": {\n' +
    '        "x": 11,\n' +
    '        "y": 385,\n' +
    '        "w": 280,\n' +
    '        "h": 280\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 103,\n' +
    '        "y": 12,\n' +
    '        "w": 280,\n' +
    '        "h": 280\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 439,\n' +
    '        "h": 310\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "purple_planet",\n' +
    '      "frame": {\n' +
    '        "x": 303,\n' +
    '        "y": 385,\n' +
    '        "w": 251,\n' +
    '        "h": 251\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 136,\n' +
    '        "y": 29,\n' +
    '        "w": 251,\n' +
    '        "h": 251\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 439,\n' +
    '        "h": 310\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "blue_power_up",\n' +
    '      "frames": [\n' +
    '        {\n' +
    '          "filename": "blue_power_up-0",\n' +
    '          "frame": {\n' +
    '            "x": 566,\n' +
    '            "y": 385,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "blue_power_up-1",\n' +
    '          "frame": {\n' +
    '            "x": 598,\n' +
    '            "y": 385,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "blue_power_up-2",\n' +
    '          "frame": {\n' +
    '            "x": 630,\n' +
    '            "y": 385,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "blue_power_up-3",\n' +
    '          "frame": {\n' +
    '            "x": 660,\n' +
    '            "y": 385,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "blue_power_up-4",\n' +
    '          "frame": {\n' +
    '            "x": 690,\n' +
    '            "y": 385,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "blue_power_up-5",\n' +
    '          "frame": {\n' +
    '            "x": 720,\n' +
    '            "y": 385,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "green_power_up",\n' +
    '      "frames": [\n' +
    '        {\n' +
    '          "filename": "green_power_up-0",\n' +
    '          "frame": {\n' +
    '            "x": 752,\n' +
    '            "y": 385,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "green_power_up-1",\n' +
    '          "frame": {\n' +
    '            "x": 784,\n' +
    '            "y": 385,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "green_power_up-2",\n' +
    '          "frame": {\n' +
    '            "x": 816,\n' +
    '            "y": 385,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "green_power_up-3",\n' +
    '          "frame": {\n' +
    '            "x": 846,\n' +
    '            "y": 385,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "green_power_up-4",\n' +
    '          "frame": {\n' +
    '            "x": 11,\n' +
    '            "y": 677,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "green_power_up-5",\n' +
    '          "frame": {\n' +
    '            "x": 41,\n' +
    '            "y": 677,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "red_power_up",\n' +
    '      "frames": [\n' +
    '        {\n' +
    '          "filename": "red_power_up-0",\n' +
    '          "frame": {\n' +
    '            "x": 73,\n' +
    '            "y": 677,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "red_power_up-1",\n' +
    '          "frame": {\n' +
    '            "x": 105,\n' +
    '            "y": 677,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "red_power_up-2",\n' +
    '          "frame": {\n' +
    '            "x": 137,\n' +
    '            "y": 677,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "red_power_up-3",\n' +
    '          "frame": {\n' +
    '            "x": 167,\n' +
    '            "y": 677,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "red_power_up-4",\n' +
    '          "frame": {\n' +
    '            "x": 197,\n' +
    '            "y": 677,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "red_power_up-5",\n' +
    '          "frame": {\n' +
    '            "x": 227,\n' +
    '            "y": 677,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "yellow_power_up",\n' +
    '      "frames": [\n' +
    '        {\n' +
    '          "filename": "yellow_power_up-0",\n' +
    '          "frame": {\n' +
    '            "x": 259,\n' +
    '            "y": 677,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "yellow_power_up-1",\n' +
    '          "frame": {\n' +
    '            "x": 291,\n' +
    '            "y": 677,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "yellow_power_up-2",\n' +
    '          "frame": {\n' +
    '            "x": 323,\n' +
    '            "y": 677,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "yellow_power_up-3",\n' +
    '          "frame": {\n' +
    '            "x": 353,\n' +
    '            "y": 677,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "yellow_power_up-4",\n' +
    '          "frame": {\n' +
    '            "x": 383,\n' +
    '            "y": 677,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": true,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 1,\n' +
    '            "y": 0,\n' +
    '            "w": 18,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "filename": "yellow_power_up-5",\n' +
    '          "frame": {\n' +
    '            "x": 413,\n' +
    '            "y": 677,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "rotated": false,\n' +
    '          "trimmed": false,\n' +
    '          "spriteSourceSize": {\n' +
    '            "x": 0,\n' +
    '            "y": 0,\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          },\n' +
    '          "sourceSize": {\n' +
    '            "w": 20,\n' +
    '            "h": 20\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "bat",\n' +
    '      "frame": {\n' +
    '        "x": 445,\n' +
    '        "y": 677,\n' +
    '        "w": 64,\n' +
    '        "h": 53\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 0,\n' +
    '        "y": 9,\n' +
    '        "w": 64,\n' +
    '        "h": 53\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "bat_drone",\n' +
    '      "frame": {\n' +
    '        "x": 521,\n' +
    '        "y": 677,\n' +
    '        "w": 32,\n' +
    '        "h": 28\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 0,\n' +
    '        "y": 4,\n' +
    '        "w": 32,\n' +
    '        "h": 28\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 32,\n' +
    '        "h": 32\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "bat_mk2",\n' +
    '      "frame": {\n' +
    '        "x": 565,\n' +
    '        "y": 677,\n' +
    '        "w": 64,\n' +
    '        "h": 53\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 0,\n' +
    '        "y": 9,\n' +
    '        "w": 64,\n' +
    '        "h": 53\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "bat_mk3",\n' +
    '      "frame": {\n' +
    '        "x": 641,\n' +
    '        "y": 677,\n' +
    '        "w": 64,\n' +
    '        "h": 53\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 0,\n' +
    '        "y": 9,\n' +
    '        "w": 64,\n' +
    '        "h": 53\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "beam_mk2",\n' +
    '      "frame": {\n' +
    '        "x": 717,\n' +
    '        "y": 677,\n' +
    '        "w": 58,\n' +
    '        "h": 60\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 3,\n' +
    '        "y": 2,\n' +
    '        "w": 58,\n' +
    '        "h": 60\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "beam_mk3",\n' +
    '      "frame": {\n' +
    '        "x": 787,\n' +
    '        "y": 677,\n' +
    '        "w": 58,\n' +
    '        "h": 60\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 3,\n' +
    '        "y": 2,\n' +
    '        "w": 58,\n' +
    '        "h": 60\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "final_boss",\n' +
    '      "frame": {\n' +
    '        "x": 11,\n' +
    '        "y": 749,\n' +
    '        "w": 122,\n' +
    '        "h": 127\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 3,\n' +
    '        "y": 0,\n' +
    '        "w": 122,\n' +
    '        "h": 127\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 128,\n' +
    '        "h": 128\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "sparrow",\n' +
    '      "frame": {\n' +
    '        "x": 145,\n' +
    '        "y": 749,\n' +
    '        "w": 60,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 2,\n' +
    '        "y": 1,\n' +
    '        "w": 60,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "sparrow_drone",\n' +
    '      "frame": {\n' +
    '        "x": 217,\n' +
    '        "y": 749,\n' +
    '        "w": 32,\n' +
    '        "h": 32\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": false,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 0,\n' +
    '        "y": 0,\n' +
    '        "w": 32,\n' +
    '        "h": 32\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 32,\n' +
    '        "h": 32\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "sparrow_mk2",\n' +
    '      "frame": {\n' +
    '        "x": 261,\n' +
    '        "y": 749,\n' +
    '        "w": 60,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 2,\n' +
    '        "y": 1,\n' +
    '        "w": 60,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "sparrow_mk3",\n' +
    '      "frame": {\n' +
    '        "x": 333,\n' +
    '        "y": 749,\n' +
    '        "w": 60,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 2,\n' +
    '        "y": 1,\n' +
    '        "w": 60,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "starter",\n' +
    '      "frame": {\n' +
    '        "x": 405,\n' +
    '        "y": 749,\n' +
    '        "w": 58,\n' +
    '        "h": 60\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 3,\n' +
    '        "y": 2,\n' +
    '        "w": 58,\n' +
    '        "h": 60\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "tear_drop",\n' +
    '      "frame": {\n' +
    '        "x": 475,\n' +
    '        "y": 749,\n' +
    '        "w": 62,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 1,\n' +
    '        "y": 1,\n' +
    '        "w": 62,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "tear_drop_drone",\n' +
    '      "frame": {\n' +
    '        "x": 549,\n' +
    '        "y": 749,\n' +
    '        "w": 32,\n' +
    '        "h": 30\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 0,\n' +
    '        "y": 1,\n' +
    '        "w": 32,\n' +
    '        "h": 30\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 32,\n' +
    '        "h": 32\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "tear_drop_mk2",\n' +
    '      "frame": {\n' +
    '        "x": 593,\n' +
    '        "y": 749,\n' +
    '        "w": 62,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 1,\n' +
    '        "y": 1,\n' +
    '        "w": 62,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "tear_drop_mk3",\n' +
    '      "frame": {\n' +
    '        "x": 667,\n' +
    '        "y": 749,\n' +
    '        "w": 62,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 1,\n' +
    '        "y": 1,\n' +
    '        "w": 62,\n' +
    '        "h": 62\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "filename": "turret",\n' +
    '      "frame": {\n' +
    '        "x": 741,\n' +
    '        "y": 749,\n' +
    '        "w": 52,\n' +
    '        "h": 60\n' +
    '      },\n' +
    '      "rotated": false,\n' +
    '      "trimmed": true,\n' +
    '      "spriteSourceSize": {\n' +
    '        "x": 6,\n' +
    '        "y": 0,\n' +
    '        "w": 52,\n' +
    '        "h": 60\n' +
    '      },\n' +
    '      "sourceSize": {\n' +
    '        "w": 64,\n' +
    '        "h": 64\n' +
    '      }\n' +
    '    }\n' +
    '  ]\n' +
    '}\n'

spriteSheet.src = SPRITE_SHEET_PATH;

let SpriteSheetArtist = function (spritesheet, cells, spriteRotation) {
    this.cells = cells;
    this.spritesheet = spritesheet;
    this.rotation = spriteRotation;
    this.cellIndex = 0;
};

SpriteSheetArtist.prototype = {
    draw: function (sprite, context) {
        let cell = this.cells[this.cellIndex];

        if (this.rotation === 0) {
            context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, cell.width, cell.height);
            return;
        }

        context.save()

        context.translate(sprite.left + cell.width / 2, sprite.top + cell.height / 2);
        context.rotate(this.rotation * Math.PI / 180);
        context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, -sprite.width / 2, -sprite.height / 2, cell.width, cell.height);

        context.restore();
    },

    advance: function () {
        if (this.cellIndex === this.cells.length - 1) {
            this.cellIndex = 0;
        } else {
            this.cellIndex++;
        }
    }
};

let Sprite = function (type, artist, behaviors) {
    let DEFAULT_WIDTH = 10;
    let DEFAULT_HEIGHT = 10;
    let DEFAULT_OPACITY = 1.0;

    this.artist = artist;
    this.type = type;
    this.behaviors = behaviors || [];

    this.hOffset = 0;
    this.left = 0;
    this.top = 0;
    this.width = DEFAULT_WIDTH;
    this.height = DEFAULT_HEIGHT;
    this.velocityX = 0;
    this.velocityY = 0;
    this.opacity = DEFAULT_OPACITY;
    this.visible = true;

    this.showCollisionRectangle = false;

    this.collisionMargin = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
};

Sprite.prototype = {
    calculateCollisionRectangle: function () {
        return {
            left: this.left - this.hOffset + this.collisionMargin.left,
            right: this.left - this.hOffset + this.width - this.collisionMargin.right,
            top: this.top + this.collisionMargin.top,
            bottom: this.top + this.collisionMargin.top + this.height - this.collisionMargin.bottom,
            centerX: this.left + this.width / 2,
            centerY: this.top + this.height / 2
        }
    },

    drawCollisionRectangle: function (context) {
        let COLLISION_RECTANGLE_COLOR = 'white';
        let COLLISION_RECTANGLE_LINE_WIDTH = 2.0;
        let rectangle = this.calculateCollisionRectangle();

        context.save();
        context.beginPath();

        context.strokeStyle = COLLISION_RECTANGLE_COLOR;
        context.lineWidth = COLLISION_RECTANGLE_LINE_WIDTH;

        context.strokeRect(rectangle.left + this.hOffset, rectangle.top, rectangle.right - rectangle.left, rectangle.bottom - rectangle.top);

        context.restore();
    },

    draw: function (context) {
        context.save();

        context.globalAlpha = this.opacity;

        if (this.visible && this.artist) {
            this.artist.draw(this, context);
        }

        if (this.showCollisionRectangle) {
            this.drawCollisionRectangle(context);
        }

        context.restore();
    },

    update: function (now, fps, context, lastAnimationFrameTime) {
        for (let i = 0; i < this.behaviors.length; ++i) {
            this.behaviors[i].execute(this, now, fps, context, lastAnimationFrameTime);
        }
    }
};

function createSprite(spriteName, rotation, behaviors) {
    let spriteCells = getSpriteCells(spriteName);
    let spriteRotation = rotation || 0;
    let behaviorList = behaviors || [];
    let sprite = new Sprite(spriteName, new SpriteSheetArtist(spriteSheet, spriteCells, spriteRotation), behaviorList);

    sprite.height = sprite.artist.cells[0].height;
    sprite.width = sprite.artist.cells[0].width;

    return sprite;
}

function getSpriteCells(spriteName) {
    let cells = [];
    let spriteData = JSON.parse(spriteJSON);
    let jsonSpriteObject;

    for (let i = 0; i < spriteData.sprites.length; ++i) {
        if (spriteData.sprites[i].filename === spriteName) {
            jsonSpriteObject = spriteData.sprites[i];
            break;
        }
    }

    if (jsonSpriteObject.frame != null) {
        let left = jsonSpriteObject.frame.x;
        let top = jsonSpriteObject.frame.y;
        let width = jsonSpriteObject.frame.w;
        let height = jsonSpriteObject.frame.h;

        cells.push({left: left, top: top, width: width, height: height});
    }

    if (jsonSpriteObject.frames != null) {
        for (let i = 0; i < jsonSpriteObject.frames.length; ++i) {
            let left = jsonSpriteObject.frames[i].frame.x;
            let top = jsonSpriteObject.frames[i].frame.y;
            let width = jsonSpriteObject.frames[i].frame.w;
            let height = jsonSpriteObject.frames[i].frame.h;

            cells.push({left: left, top: top, width: width, height: height});
        }
    }

    return cells;
}

