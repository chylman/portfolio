import React, {useState} from "react";
import {TbMenu3, TbX} from "react-icons/tb";
import {Socials} from "../../../components/socials/Socials";
import IconGithub from "../../../assets/image/icons/github-mini.svg";
import IconTwitter from "../../../assets/image/icons/twitter-mini.svg";
import IconLinkedin from "../../../assets/image/icons/linkedin-mini.svg";
import {MenuItemsPropsType, MenuList} from "../../../components/menuList/MenuList";
import {S} from "./MobileMenu_Styles";

const SOCIAL_ITEMS = [{icon: <IconGithub/>,}, {icon: <IconTwitter/>,}, {icon: <IconLinkedin/>,},]

type MobileMenuPropsType = {
    menuItems: MenuItemsPropsType
    justify?: string | null
    className?: string
}

export const MobileMenu: React.FC<MobileMenuPropsType> = (props: MobileMenuPropsType) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu className={props.className}>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <TbMenu3 size="36" color="#a7a7a7"/>
                <TbX size="36" color="#a7a7a7"/>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <MenuList menuItems={props.menuItems} justify={props.justify || null} setMenuIsOpen={setMenuIsOpen}
                />
                <Socials items={SOCIAL_ITEMS}/>
            </S.MobileMenuWrapper>
        </S.MobileMenu>
    );
};
