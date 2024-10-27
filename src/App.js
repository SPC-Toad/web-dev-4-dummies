import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Desktop/Home/Home.js'
import Landing from './components/Desktop/Landing/Landing.js';
import C from './components/Desktop/Clang/C.js';
import Python from './components/Desktop/Python/Python.js';
import JS from './components/Desktop/JS/JS.js';
import CSS from './components/Desktop/CSS/CSS.js';
import HTML from './components/Desktop/HTML/HTML.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/C' element={<C />}/>
        <Route path='/HTML' element={<HTML />}/>
        <Route path='/CSS' element={<CSS />}/>
        <Route path='/JS' element={<JS />}/>
        <Route path='/Python' element={<Python />}/>
      </Routes>
    </Router>
  );
}

export default App;
