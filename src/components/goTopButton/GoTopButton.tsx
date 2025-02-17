import React, {useEffect, useState} from 'react';
import {S} from './GoTopButton_Styled'
import {TiArrowUpOutline} from "react-icons/ti";
import {animateScroll as scroll} from "react-scroll";

export const GoTopButton: React.FC = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false)
            }
        })
    }, [])

    return (

        <>
            {showButton && (
                <S.GoTopButton onClick={scroll.scrollToTop}>
                    <TiArrowUpOutline size={32}/>
                </S.GoTopButton>
            )}
        </>
    );
};
