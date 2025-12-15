import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import { LanguageProvider } from './contexts/LanguageContext';
import BackgroundRotator from './components/BackgroundRotator';

//function App() {
//    return (
//        <>
//        <BackgroundRotator />
//            <LanguageProvider>
//                <Router>
//                    <NavBar />
//                    <div className="main-content" style={{ paddingTop: '60px' }}>

//                            <Routes>
//                                <Route path="/" element={<Home />} />
//                                <Route path="/about" element={<About />} />
//                                <Route path="/services" element={<Services />} />
//                                <Route path="/contact" element={<Contact />} />
//                            </Routes>

//                    </div>
//                    </Router>
//            </LanguageProvider>
//        </>
//    );
//}

function App() {
    return (
        <>
            <BackgroundRotator />
            <LanguageProvider>
                <Router>
                    <NavBar />
                    <div className="main-content" style={{
                        paddingTop: '60px',
                        position: 'relative',
                        zIndex: 1 // ensures content is above the background
                    }}>
                        <Routes>
                            <Route path="/namintax/" element={<Home />} />
                            <Route path="/namintax/about" element={<About />} />
                            <Route path="/namintax/services" element={<Services />} />
                            <Route path="/namintax/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </Router>
            </LanguageProvider>
        </>
    );
}


export default App;
