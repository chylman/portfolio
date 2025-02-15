import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {Works} from "./layout/sections/works/Works.tsx";
import {About} from "./layout/sections/about/About";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;
