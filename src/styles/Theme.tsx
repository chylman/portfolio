import {MoveDirection, OutMode} from "@tsparticles/engine";

export const dark = {
    name: 'dark-theme',
    colors: {
        primaryBg: "#191919",
        secondBg: "#202021",
        accent: "#13b0f5",
        accentSecond: "#e70faa",
        accentDecor: "#42446E",

        textMain: "#d9d9d9",
        textSecond: "#a7a7a7",
        textSmall: "#cccccc",

        white: "#ffffff",
        outline: "#a7a7a7",
        border: "#EBEAED",

        iconMain: "#a7a7a7",
        iconHover: "#ffffff",

        headerMenu: "#a7a7a7",
        footerMenu: "#a7a7a7",

        footerLogo: "#a7a7a7",
        footerLink: "#a7a7a7",
        footerLinkHover: "#ffffff",
        footerIcon: "#a7a7a7",
        footerIconHover: "#ffffff",

        plateBg: "#d7ffe0",
        plateText: "#018c0f",

        workCardShadow: "2px 2px 100px rgba(0, 0, 0, 0)",
        workCardTitle: "#cccccc",
        workCardText: "#cccccc",
        workCardSmallText: "#cccccc",
        workCardLink: "#ffffff",

        particles: "#ffffff",
    },
    animation: {
        transitionDefault: "0.4s ease-in-out",
    },
    media: {
        tablet: "screen and (max-width: 1023px)",
        mobile: "screen and (max-width: 768px)"
    },
    particlesOptions: {
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 250,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.out,
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 20,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "square",
            },
            size: {
                value: {min: 0.2, max: 1},
            },
        },
        detectRetina: true,
    },
};

export const light = {
    name: 'light-theme',
    colors: {
        primaryBg: "#ffffff",
        secondBg: "#ffffff",
        accent: "#13b0f5",
        accentSecond: "#e70faa",
        accentDecor: "#42446E",

        textMain: "#42446E",
        textSecond: "#666666",
        textSmall: "#42446E",

        white: "#ffffff",
        outline: "#a7a7a7",
        border: "#EBEAED",

        iconMain: "#666666",
        iconHover: "#7a7983",

        headerMenu: "#a7a7a7",
        footerMenu: "#42446E",

        footerLogo: "#42446E",
        footerLink: "#42446E",
        footerLinkHover: "#666666",
        footerIcon: "#42446E",
        footerIconHover: "#666666",

        plateBg: "#d7ffe0",
        plateText: "#018c0f",


        workCardShadow: "2px 2px 100px rgba(0, 0, 0, 0.2)",
        workCardTitle: "#000",
        workCardText: "#666",
        workCardSmallText: "#42446e",
        workCardLink: "#000",
    },
    animation: {
        transitionDefault: "0.4s ease-in-out",
    },
    media: {
        tablet: "screen and (max-width: 1023px)",
        mobile: "screen and (max-width: 768px)"
    },
    particlesOptions: {
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#1E0E62",
            },
            links: {
                color: "#1E0E62",
                distance: 250,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.out,
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 20,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "square",
            },
            size: {
                value: {min: 0.2, max: 1},
            },
        },
        detectRetina: true,
    },
};
