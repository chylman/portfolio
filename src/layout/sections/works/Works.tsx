import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/work";
import placeholderImage from "../../../assets/image/content/placeholder.png"

const worksItems = ["all", "landing page", "react", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                <Work title={"Project Tile goes here"}
                      description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={placeholderImage} stack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                <Work title={"Project Tile goes here"}
                      description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={placeholderImage} stack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                <Work title={"Project Tile goes here"}
                      description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={placeholderImage} stack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                <Work title={"Project Tile goes here"}
                      description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={placeholderImage} stack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                <Work title={"Project Tile goes here"}
                      description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={placeholderImage} stack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                <Work title={"Project Tile goes here"}
                      description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      src={placeholderImage} stack={"Tech stack : HTML , JavaScript, SASS, React"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  background-color: #539f77;
`
