import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/work";
import placeholderImage from "../../../assets/image/content/placeholder.png"
import {Container} from "../../../components/Container";
import {SectionText} from "../../../components/SectionText.tsx";
import {theme} from "../../../styles/Theme";

const worksItems = ["All", "Landing page", "React", "Spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText className={"works-text"}>Things I’ve built so far</SectionText>
                <Menu menuItems={worksItems} justify={"center"} className={"works-menu"}/>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} gapcolumn={"50px"} gaprow={"65px"}>
                    <Work title={"Project Tile goes here"}
                          description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          src={placeholderImage} titleStack={"Tech stack: "} stack={"HTML , JavaScript, SASS, React"}/>
                    <Work title={"Project Tile goes here"}
                          description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          src={placeholderImage} titleStack={"Tech stack: "} stack={"HTML , JavaScript, SASS, React"}/>
                    <Work title={"Project Tile goes here"}
                          description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          src={placeholderImage} titleStack={"Tech stack: "} stack={"HTML , JavaScript, SASS, React"}/>
                    <Work title={"Project Tile goes here"}
                          description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          src={placeholderImage} titleStack={"Tech stack: "} stack={"HTML , JavaScript, SASS, React"}/>
                    <Work title={"Project Tile goes here"}
                          description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          src={placeholderImage} titleStack={"Tech stack: "} stack={"HTML , JavaScript, SASS, React"}/>
                    <Work title={"Project Tile goes here"}
                          description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          src={placeholderImage} titleStack={"Tech stack: "} stack={"HTML , JavaScript, SASS, React"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  padding: 100px 0;

  .works-menu {
    margin: 0 0 50px 0;

    @media ${theme.media.tablet} {
      margin: 0 0 30px 0;
    }
    @media ${theme.media.mobile} {
      margin: 0 0 15px 0;
    }
  }

  .works-text {
    margin-bottom: 50px;

    @media ${theme.media.tablet} {
      margin-bottom: 30px;
    }
    @media ${theme.media.mobile} {
      margin-bottom: 15px;
    }
  }

  @media ${theme.media.tablet} {
    padding: 50px 0;
  }
  @media ${theme.media.mobile} {
    padding: 20px 0;
  }
`
