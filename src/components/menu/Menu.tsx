import {MenuItemsPropsType, MenuList} from "../menuList/MenuList";
import {S} from "./Menu_Styles"

export const Menu = (props: { menuItems: MenuItemsPropsType, justify?: string | null, className?: string }) => {
    return (
        <S.Menu className={props.className}>
            <MenuList menuItems={props.menuItems} justify={props.justify || null}/>
        </S.Menu>
    );
};
