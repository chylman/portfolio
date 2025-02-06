type LogoPropsType = {
    src: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <a href="#">
            <img src={props.src} alt={""} width={"97"} height={"59"}/>
        </a>
    );
};
