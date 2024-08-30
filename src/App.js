
import './App.css';
import Navbar from './Navbar';
import NameHeading from './NameHeading';
import AboutME from './AboutMe';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <NameHeading/>
      <AboutME/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;