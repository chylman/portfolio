import {S} from './Socials_Styles'

type SocialsPropsType = {
    items: { icon: JSX.Element }[],
    className?: string,
}


export const Socials = (props: SocialsPropsType) => {
    return (
        <S.Socials className={props.className}>
            {props.items.map((item, index) => {
                return <S.SocialsItem key={index}>
                    <S.SocialsLink>
                        {item.icon}
                    </S.SocialsLink>
                </S.SocialsItem>
            })}
        </S.Socials>
    );
};

