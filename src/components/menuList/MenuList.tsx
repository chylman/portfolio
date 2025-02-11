import React from 'react';
import {S} from "./MenuList_Styles"

type MenuListPropsType = {
    menuItems: Array<string>
    justify?: string | null
}

export const MenuList: React.FC<MenuListPropsType> = (props: MenuListPropsType) => {
    return (
        <S.MenuList justify={props.justify || null}>
            {props.menuItems.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.Link href="src/components/menuList/MenuList#">
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.ListItem>
            })}
        </S.MenuList>
    );
};
