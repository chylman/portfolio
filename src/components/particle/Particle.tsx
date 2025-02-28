import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {type ISourceOptions} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";
import {useTheme} from 'styled-components';

export const Particle = () => {
    const [init, setInit] = useState(false);
    const theme = useTheme();
    const [optionsFromTheme, setOptionsFromTheme] = useState<ISourceOptions>(theme.particlesOptions);
    console.log('Current theme: ', theme);


    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // const options: ISourceOptions = setOptionsFromTheme(theme.optionsFromTheme);
    {
        if (init) {
            return (
                <Particles
                    id="tsparticles"
                    options={optionsFromTheme}
                />
            );
        }

        return <></>;
    }
};
