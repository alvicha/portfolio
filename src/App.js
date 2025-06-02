import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './pages/portfolio.css';
import { ScreensProvider } from './screens/ScreensContext';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './pages/HomeComponent';
import AboutComponent from './pages/AboutComponent';
import ContactComponent from './components/ContactComponent';

function App() {
  return (
    <ScreensProvider>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
      <FooterComponent />
    </ScreensProvider>
  );
}

export default App;
