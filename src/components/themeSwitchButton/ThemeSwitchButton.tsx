import React from 'react';
import {light, dark} from "../../styles/Theme.tsx";
import {useTheme} from 'styled-components'
import {S} from './ThemeSwitchButton_Styled.ts';

type ThemeSwitchButtonProps = {
    setSelectedTheme: React.Dispatch<React.SetStateAction<any>>;
}

export const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = (props: ThemeSwitchButtonProps) => {
    const theme = useTheme()

    function switchTheme(currentTheme: any) {
        if (currentTheme.name === "dark-theme") {
            props.setSelectedTheme(light);
            localStorage.setItem("current-theme", JSON.stringify(light));
        } else {
            props.setSelectedTheme(dark);
            localStorage.setItem("current-theme", JSON.stringify(dark));
        }
    }

    return (
        <S.ThemeSwitchButton onClick={(evt) => {
            switchTheme(theme);
            console.log(evt.currentTarget.firstChild)
            if (evt.currentTarget.firstChild) {
                evt.currentTarget.firstChild.setAttribute("data-theme", JSON.parse(localStorage.getItem("current-theme") as string).name);
            }
        }}>
            <S.Svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <S.Moon className="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white"/>
                    <circle cx="24" cy="10" r="6" fill="black"/>
                </S.Moon>
                <S.Sun className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"/>
                <S.SunBeams className="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </S.SunBeams>
            </S.Svg>
        </S.ThemeSwitchButton>
    );
};
