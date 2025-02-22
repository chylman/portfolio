import {useEffect, useState} from "react";
import './App.css';
import {GlobalStyle} from "./styles/Global.styled";
import {ThemeProvider} from 'styled-components';
import {Header} from './layout/header/Header';
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Works} from "./layout/sections/works/Works.tsx";
import {About} from "./layout/sections/about/About";
import {Particle} from "./components/particle/Particle";
import {GoTopButton} from "./components/goTopButton/GoTopButton";
import {light} from "./styles/Theme.tsx";


function App() {
    const [selectedTheme, setSelectedTheme] = useState(light);
    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem("current-theme") as string);
        if (currentTheme) {
            setSelectedTheme(currentTheme);
        }
    }, []);

    return (
        <div className="App">
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyle/>
                <Particle/>
                <Header setSelectedTheme={setSelectedTheme}/>
                <Main/>
                <About/>
                <Skills/>
                <Works/>
                <Contact/>
                <Footer/>
                <GoTopButton/>
            </ThemeProvider>
        </div>
    );
}

export default App;
