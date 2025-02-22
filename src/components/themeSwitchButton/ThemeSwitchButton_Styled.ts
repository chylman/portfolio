import styled from "styled-components";

const ThemeSwitchButton = styled.button`
    cursor: pointer;
`


const Moon = styled.mask`
    transition: fill ${({theme}) => theme.animation.transitionDefault};

`

const Sun = styled.circle`
    transition: color ${({theme}) => theme.animation.transitionDefault};

`

const SunBeams = styled.g`
    transition: color ${({theme}) => theme.animation.transitionDefault};

`

const Svg = styled.svg`
    width: 30px;
    height: 30px;

    & > :is(${Moon}, ${Sun}, ${SunBeams}) {
        transform-origin: center center;
    }

    & > :is(${Moon},  ${Sun}) {
        fill: ${({theme}) => theme.colors.iconMain};
        transition: fill ${({theme}) => theme.animation.transitionDefault};

        ${ThemeSwitchButton}:is(:hover, :focus-visible) > & {
            fill: ${({theme}) => theme.colors.iconHover};
        }
    }

    & > ${SunBeams} {
        stroke: ${({theme}) => theme.colors.iconMain};
        stroke-width: 2px;
        transition: color ${({theme}) => theme.animation.transitionDefault};

        ${ThemeSwitchButton}:is(:hover, :focus-visible) & {
            stroke: ${({theme}) => theme.colors.iconHover};
        }
    }


    &[data-theme="dark-theme"] {
        & > ${Sun} {
            transform: scale(1.75);
        }

        & > ${SunBeams} {
            opacity: 0;
        }

        & > ${Moon} > circle {
            transform: translateX(-7px);

            @supports (cx: 1px) {
                transform: translateX(0);
                cx: 17px;
            }
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        & > ${Sun} {
            transition: transform .5s cubic-bezier(.5, 1.25, .75, 1.25), fill ${({theme}) => theme.animation.transitionDefault};
        }

        & > ${SunBeams} {
            transition: transform .5s cubic-bezier(.5, 1.5, .75, 1.25), stroke ${({theme}) => theme.animation.transitionDefault},
            opacity .5s cubic-bezier(.25, 0, .3, 1);
        }

        & ${Moon} > circle {
            transition: transform .25s cubic-bezier(0, 0, 0, 1);

            @supports (cx: 1px) {
                transition: cx .25s cubic-bezier(0, 0, 0, 1);
            }
        }

        &[data-theme="dark-theme"] & {
            & > ${Sun} {
                transform: scale(1.75);
                transition-timing-function: cubic-bezier(.25, 0, .3, 1);
                transition-duration: .25s;
            }

            & > ${SunBeams} {
                transform: rotateZ(-25deg);
                transition-duration: .15s;
            }

            & > ${Moon} > circle {
                transition-delay: .25s;
                transition-duration: .5s;
            }
        }
    }
`

export const S = {
    ThemeSwitchButton,
    Svg,
    Moon,
    Sun,
    SunBeams
}
