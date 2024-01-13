// App.js
import React from 'react';
import { BrowserRouter as Router  , Route  , Routes  } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/Navbar';
import HomeComponent from './components/Home';
import AvboutComponent from './components/AboutUs';
import ServiceComponent from './components/Services';
import ContactUs from './components/ContactUs';

export const App = () => {
    return (
            <Router>
            <CustomNavbar />
                <Routes>
                <Route exact path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AvboutComponent />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/services" element={<ServiceComponent />} />
            </Routes>
                    {/* Add other routes here */}
            </Router>
    );
}

export default App;
