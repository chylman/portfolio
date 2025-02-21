import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Works} from "./layout/sections/works/Works.tsx";
import {About} from "./layout/sections/about/About";
import {Particle} from "./components/particle/Particle";
import {GoTopButton} from "./components/goTopButton/GoTopButton";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
            <GoTopButton/>
        </div>
    );
}

export default App;
