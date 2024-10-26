import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Desktop/Home/Home.js'
import Landing from './components/Desktop/Landing/Landing.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
