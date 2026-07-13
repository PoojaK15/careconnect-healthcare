import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SupportFormPage from './pages/SupportFormPage';
import AIReviewPage from './pages/AIReviewPage';
import SuccessPage from './pages/SuccessPage';
import AboutPage from './pages/AboutPage';

// Main app layout with reusable navigation and footer.
function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/support" element={<SupportFormPage />} />
          <Route path="/summary" element={<AIReviewPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
