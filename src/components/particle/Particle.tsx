import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {MoveDirection, OutMode} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";

type OptionsType = {
    background?:
        {
            color:
                { value: string }
        };
    interactivity?: {
        modes: {
            repulse: {
                duration: number;
                distance: number
            };
            push: {
                quantity: number
            }
        };
        events: {
            onHover: {
                mode: string;
                enable: boolean
            }
        }
    };
    particles?: {
        number: {
            density:
                {
                    enable: boolean
                };
            value: number
        };
        move: {
            straight: boolean;
            random: boolean;
            enable: boolean;
            outModes: {
                default: OutMode.out
            };
            speed: number;
            direction: MoveDirection.none
        };
        color: {
            value: string
        };

        shape: {
            type: string
        };
        size: {
            value: {
                min: number;
                max: number
            }
        };
        links: {
            color: string;
            distance: number;
            enable: boolean;
            width: number;
            opacity: number
        };
        opacity: {
            value: number
        }
    };
    fpsLimit?: number;
    detectRetina?: boolean
}


export const Particle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: OptionsType = useMemo(
        () => ({
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
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                // particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};
