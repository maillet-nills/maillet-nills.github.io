import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import TechWatch from './pages/TechWatch';

function App() {
    const location = useLocation();

    return (
        <>
            <Nav />
            <PageTransition locationKey={location.pathname}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tech-watch" element={<TechWatch />} />
                </Routes>
            </PageTransition>
            <Footer />
        </>
    );
}

export default App;