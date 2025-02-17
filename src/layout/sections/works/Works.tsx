import {motion, AnimatePresence} from "motion/react"
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
        title: "landing",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "landing",
        id: 1,
    },
    {
        title: "react",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "react",
        id: 2,
    },
    {
        title: "landing",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "landing",
        id: 3,
    },
    {
        title: "spa",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "spa",
        id: 4,
    },
    {
        title: "react",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "react",
        id: 5,
    },
    {
        title: "spa",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: placeholderImage,
        titleStack: "Tech stack: ",
        stack: "HTML , JavaScript, SASS, React",
        type: "spa",
        id: 6,
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
        <S.Works id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText className={"works-text"}>Things I’ve built so far</SectionText>
                <TabMenu tabsItems={tabsItems} justify={"center"} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} gapcolumn={"50px"} gaprow={"65px"}>
                    <AnimatePresence>
                        {
                            filtredWorks.map((w) => {
                                return (
                                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                                key={w.id} layout style={{flexBasis: "373px", flexGrow: 1}}>
                                        <Work title={w.title}
                                              description={w.description}
                                              src={w.src} titleStack={w.titleStack}
                                              stack={w.stack} key={w.id}/>
                                    </motion.div>
                                )
                            })
                        }
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

