import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HeroSection from './Pages/HeroSection';
import ServicesSection from './Pages/ServicesSection';
import ServicesSection2 from './Pages/ServicesSection2';
import ServicesSection3 from './Pages/ServicesSection3';
import Showcase from './Pages/showcase';
import Transforming from './Pages/Transforming';
import Feedback from './Pages/Feedback';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Foot from './Pages/Foot';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroSection" element={<HeroSection />} />
        <Route path="/servicesSection" element={<ServicesSection />} />
        <Route path="/servicesSection2" element={<ServicesSection2 />} />
        <Route path="/servicesSection3" element={<ServicesSection3 />} />
        <Route path="/Showcase" element={<Showcase />} />
        <Route path="/Transforming" element={<Transforming />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Foot" element={<Foot />} />
      </Routes>
    </Router>
  );
}

export default App;
