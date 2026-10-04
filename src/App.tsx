import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import FloatingShapes from './FloatingShapes'
import Home from './pages/Home';
import Experience from './pages/Experience';
import About from './pages/About';
import TechWatch from './pages/TechWatch';

function App() {
    const location = useLocation();

    return (
        <>
            <FloatingShapes />
            <Nav />
            <PageTransition locationKey={location.pathname}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/tech-watch" element={<TechWatch />} />
                </Routes>
            </PageTransition>
            <Footer />
        </>
    );
}

export default App;