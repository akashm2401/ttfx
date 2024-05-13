import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <NavbarComponent/>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='' index element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
