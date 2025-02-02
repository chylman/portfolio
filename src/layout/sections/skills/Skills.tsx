import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import IconHtml5 from '../../../assets/image/icons/html5.svg';
import IconCSS from '../../../assets/image/icons/css.svg';
import IconJs from '../../../assets/image/icons/js.svg';
import IconReact from '../../../assets/image/icons/react.svg';
import IconRedux from '../../../assets/image/icons/redux.svg';
import IconTailwind from '../../../assets/image/icons/tailwind.svg';
import IconSass from '../../../assets/image/icons/sass.svg';
import IconBootstrap from '../../../assets/image/icons/bootstrap.svg';
import IconGit from '../../../assets/image/icons/git.svg';
import IconGreensock from '../../../assets/image/icons/greensock.svg';
import IconVscode from '../../../assets/image/icons/vscode.svg';
import IconGithub from '../../../assets/image/icons/github.svg';


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill icon={<IconHtml5/>}></Skill>
                <Skill icon={<IconCSS/>}></Skill>
                <Skill icon={<IconJs/>}></Skill>
                <Skill icon={<IconReact/>}></Skill>
                <Skill icon={<IconRedux/>}></Skill>
                <Skill icon={<IconBootstrap/>}></Skill>
                <Skill icon={<IconTailwind/>}></Skill>
                <Skill icon={<IconSass/>}></Skill>
                <Skill icon={<IconGit/>}></Skill>
                <Skill icon={<IconGreensock/>}></Skill>
                <Skill icon={<IconVscode/>}></Skill>
                <Skill icon={<IconGithub/>}></Skill>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #312949;
  min-height: 100vh;
`
