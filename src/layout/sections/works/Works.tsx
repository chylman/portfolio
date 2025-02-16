import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import placeholderImage from "../../../assets/image/content/placeholder.png"
import {Container} from "../../../components/Container";
import {SectionText} from "../../../components/SectionText.ts";
import {S} from "./Works_Styles.ts";
import {Work} from "./work/Work.tsx";
import {TabMenu, TabStatusType} from "../../../components/tabMenu/TabMenu";
import {useState} from "react";

const tabsItems: Array<{
    title: string,
    status: TabStatusType
}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },

];

const worksData = [
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "landing",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "react",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "landing",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "spa",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "react",
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "spa",
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabStatusType>('all');
    let filtredWorks = worksData;

    if (currentFilterStatus === 'landing') {
        filtredWorks = worksData.filter(work => work.type === 'landing')
    }

    if (currentFilterStatus === 'react') {
        filtredWorks = worksData.filter(work => work.type === 'react')
    }

    if (currentFilterStatus === 'spa') {
        filtredWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }


    return (
        <S.Works>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText className={"works-text"}>Things I’ve built so far</SectionText>
                <TabMenu tabsItems={tabsItems} justify={"center"} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} gapcolumn={"50px"} gaprow={"65px"}>
                    {
                        filtredWorks.map((w, index) => {
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

