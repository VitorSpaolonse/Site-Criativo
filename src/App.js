import './App.css';
import NavBar from './components/layouts/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VideoSelecionado from './pages/VideoSelecionado';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoSelecionado />} />
      </Routes>
    </Router>
  );
}

export default App;
