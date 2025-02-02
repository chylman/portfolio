import iconsSprite from '../../assets/image/icons/sprite.svg';

type iconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = ({iconId, width, height, viewBox}: iconPropsType) => {
    return (
        <svg width={width || "41"} height={height || "40"} viewBox={viewBox || "0 0 41 40"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </svg>
    );
};
