import Navbar from "./Components/Navbar.js/Navbar";
import i18n from "./i18n";
import { Element ,Link} from 'react-scroll';
import Header from "./Components/Header/Header";
import './Assets/main.css'
import Logo from './Assets/Images/white.png'
import image from './Assets/Images/umdgroup.mp4'
import Main from "./Components/Main/Main";
import CaruselIm from "./Assets/Images/Aboutus.svg"
import Section from './Components/Section/Section';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import "./i18n"
function App() {
  return (
    <div>
    
        <Navbar logo={Logo}/>
      <video className="video" src={image} alt="bgLogo" width='100%'  loop autoPlay muted />
      <Header/>
      <Element name='About us' className="element">
      <Main CarOne={CaruselIm}/>
      </Element>
      <Element name='section2' className="element">
        <Section/>
      </Element>
      <Element name='section3' className="element">
        <Portfolio/>
      </Element>
       <Footer logo={Logo}/>
    </div>
    
  );
}

export default App;
