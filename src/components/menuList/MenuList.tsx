import React from 'react';
import {S} from "./MenuList_Styles"

export type MenuItemsPropsType = Array<{
    title: string,
    href: string
}>

type MenuListPropsType = {
    menuItems: MenuItemsPropsType
    justify?: string | null
}

export const MenuList: React.FC<MenuListPropsType> = (props: MenuListPropsType) => {
    return (
        <S.MenuList justify={props.justify || null}>
            {props.menuItems.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.MenuListLink to={item.href} smooth={true} spy={true}>
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.MenuListLink>
                </S.ListItem>
            })}
        </S.MenuList>
    );
};
