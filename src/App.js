import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import SolutionsPage from './pages/SolutionsPage/SolutionsPage'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'
import FooterComponent from './components/FooterComponent/FooterComponent';
import LegalPage from './pages/LegalPage/LegalPage';
import FAQPage from './pages/FAQPage/FAQPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import ClientsPage from './pages/ClientsPage/ClientsPage';
import SpinnerComponent from './components/SpinnerComponent/SpinnerComponent';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      {loading && <SpinnerComponent />} {/* Show spinner while loading */}
      {!loading && ( /* Show content after loading is done */
        <>
        <header className="app-header">
          <NavbarComponent/>
        </header>
        <main>
            <Routes>
              <Route path='' index element={<HomePage/>} />
              <Route path='/solutions' element={<SolutionsPage/>}/>
              <Route path='/clients' element={<ClientsPage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/contact-us' element={<ContactUsPage/>}/>
              <Route path='/faq' element={<FAQPage/>}/>
              <Route path='/legal/*' element={<LegalPage/>}/>
              <Route path='*' element={<HomePage/>}/>
            </Routes>
        </main>
        <footer>
          <FooterComponent/>
        </footer>
      </>)}
    </div>
    </BrowserRouter>
  );
}

export default App;
