import React from "react";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Socials} from "../../components/socials/Socials";
import IconGithub from "../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../assets/image/icons/linkedin-mini.svg";
import logoImage from "../../assets/image/logo/logo 3.svg"
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from './Header_Styles.ts';

const MENU_ITEMS = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1023;

    React.useEffect(() => {
        const handlerWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handlerWindowResize);
        return () => window.removeEventListener("resize", handlerWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo src={logoImage}/>
                    {width < breakpoint ? <MobileMenu menuItems={MENU_ITEMS} justify={"center"}/> :
                        <>
                            <Menu menuItems={MENU_ITEMS}/>
                            <Socials items={SOCIAL_ITEMS}
                                     className={"header-desktop-socials"}/>
                        </>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

