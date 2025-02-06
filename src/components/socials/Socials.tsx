import styled from "styled-components";

type SocialsPropsType = {
    items: { icon: JSX.Element }[]
}


export const Socials = (props: SocialsPropsType) => {
    return (
        <StyledSocials>
            {props.items.map((item, index) => {
                return <SocialsItem key={index}>
                    <SocialsLink>
                        {item.icon}
                    </SocialsLink>
                </SocialsItem>
            })}
        </StyledSocials>
    );
};

const StyledSocials = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0 20px;
`
const SocialsItem = styled.li`
  width: 30px;
  height: 30px;
`
const SocialsLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`
