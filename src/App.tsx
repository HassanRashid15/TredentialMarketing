import './styles/globals.css';  // Adjust path based on your project
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutUs from './pages/AboutUs';
import Team from './pages/team';  // Import the Team page
import Header from './components/Header';  
import Footer from './components/Footer';  
import CaseStudies from './pages/CaseStudies';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Header/>
      <div className = "main-content-area-custom">
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />  
        <Route path="/casestudies" element={<CaseStudies />} />  
        <Route path="/portfolio" element={<Portfolio/>} />  
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
