import React from "react";
import {S} from "./TabMenu_Styles"

export type TabStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{
        title: string,
        status: TabStatusType
    }>
    justify?: string
    className?: string
    changeFilterStatus: (value: TabStatusType) => void
    currentFilterStatus: TabStatusType
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <S.TabsList justify={props.justify || null}>
                {props.tabsItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => {
                            props.changeFilterStatus(item.status)
                        }}>
                            {item.title}
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                        </S.Link>
                    </S.ListItem>
                })}
            </S.TabsList>
        </S.TabMenu>
    );
};
