import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import placeholderImage from "../../../assets/image/content/placeholder.png"
import {Container} from "../../../components/Container";
import {SectionText} from "../../../components/SectionText.tsx";
import {S} from "./Works_Styles.ts";
import {Work} from "./work/Work.tsx";

const worksMenuItems = ["All", "Landing page", "React", "Spa"]
const worksData = [
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText className={"works-text"}>Things I’ve built so far</SectionText>
                <Menu menuItems={worksMenuItems} justify={"center"} className={"works-menu"}/>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} gapcolumn={"50px"} gaprow={"65px"}>
                    {
                        worksData.map((w, index) => {
                            return <Work title={w.title}
                                         description={w.description}
                                         src={w.src} titleStack={w.titleStack} stack={w.stack} key={index}/>
                        })
                    }
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

