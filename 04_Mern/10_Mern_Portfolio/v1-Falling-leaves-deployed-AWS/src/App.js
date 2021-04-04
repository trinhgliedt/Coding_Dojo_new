import './App.css';
import React, {useState} from 'react';
import Background from './components/Background.jsx';
import NavBar from './components/NavBar.jsx';
import Projects from './views/Projects.jsx';
import Resume from './views/Resume.jsx';
import AboutMe from './components/AboutMe.jsx';
import Certificates from './components/Certificates';


function App(props) {

  const [selectedTab, setSelectedTab] = useState("intro");
  

  return (
    <div style={{ maxWidth: '1200px', height:"3000px" }} className="App container" >
    <Background/>
      <h2  className="text-center mb-4 pt-4 mt-0">Trinh Gliedt</h2>
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      
      <div id="pageContent" style={{ position: 'relative', zIndex: '2' }}>
        {selectedTab === "intro" && <AboutMe/>}
        {selectedTab === "projects" && <Projects/>}
        {selectedTab === "resume" && <Resume/>}
        {selectedTab === "certificates" && <Certificates/>}
      </div>
    </div>
  );
}

export default App;
