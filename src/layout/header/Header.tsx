import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 41px 0 21px;
  background-color: ${theme.colors.primaryBg};
`
