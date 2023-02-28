import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar.component.jsx';
import Home from './components/home.component.jsx';
import Profile from './components/profile.component.jsx';
import CreateUser from './components/createUser.component.jsx';
import Comment from './components/comment.component.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" component={<Profile/>} />
        <Route path="/createUser" component={<CreateUser/>} />
      </Routes>
    </Router>
  )
}

export default App;
