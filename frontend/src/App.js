import logo from './obeid_young.jpeg';
import Home from './pages/home.js';
import About from './pages/about.js';
import SignUp from './pages/signup.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
