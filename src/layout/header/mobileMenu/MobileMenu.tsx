import {theme} from "../../../styles/Theme";
import {TbMenu3, TbX} from "react-icons/tb";
import {Socials} from "../../../components/socials/Socials";
import IconGithub from "../../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../../assets/image/icons/linkedin-mini.svg";
import {MenuList} from "../../../components/menuList/MenuList";
import {S} from "./MobileMenu_Styles";

const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

type MobileMenuPropsType = {
    menuItems: Array<string>
    justify?: string | null
    className?: string
}

export const MobileMenu = (props: MobileMenuPropsType) => {
    return (
        <S.MobileMenu className={props.className}>
            <S.BurgerButton isOpen={false}>
                <TbMenu3 size="36" color={theme.colors.iconMain}/>
                <TbX size="36" color={theme.colors.iconMain}/>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen={false}>
                <MenuList menuItems={props.menuItems} justify={props.justify || null}/>
                <Socials items={SOCIAL_ITEMS}/>
            </S.MobileMenuWrapper>
        </S.MobileMenu>
    );
};
