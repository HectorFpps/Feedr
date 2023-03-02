import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Authentification from './components/Authentification.jsx';
import Comment from './components/Comment.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" component={<Profile/>} />
        <Route path="/authentification" component={<Authentification />} />
      </Routes>
    </Router>
  )
}

export default App;
