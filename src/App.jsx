import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Ships from './pages/Ships';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ships" element={<Ships />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;