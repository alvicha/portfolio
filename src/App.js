import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './pages/portfolio.css';
import { ScreensProvider } from './screens/ScreensContext';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './pages/HomeComponent';

function App() {
  return (
    <ScreensProvider>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
      </Routes>
      <FooterComponent />
    </ScreensProvider>
  );
}

export default App;
