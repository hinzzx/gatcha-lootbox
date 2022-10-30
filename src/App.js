import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
     
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lootboxes" element={<LoginForm />} />
      </Routes>

    </Router>
  );
}

export default App;
