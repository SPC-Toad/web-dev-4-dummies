import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Desktop/Home/Home.js';
import Landing from './components/Desktop/Landing/Landing.js';
import C from './components/Desktop/Clang/C.js';
import Python from './components/Desktop/Python/Python.js';
import JS from './components/Desktop/JS/JS.js';
import CSS from './components/Desktop/CSS/CSS.js';
import HTML from './components/Desktop/HTML/HTML.js';

function App() {
  return (
    <Router>
      <TitleUpdater />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/C' element={<C />} />
        <Route path='/HTML' element={<HTML />} />
        <Route path='/CSS' element={<CSS />} />
        <Route path='/JS' element={<JS />} />
        <Route path='/PYTHON' element={<Python />} />
      </Routes>
    </Router>
  );
}

// TitleUpdater component to handle title changes
function TitleUpdater() {
  const location = useLocation(); // Router dom

  useEffect(() => {
    // Define a map of paths to titles
    const titleMap = {
      '/': 'Landing',
      '/home': 'Home',
      '/C': 'C Language',
      '/HTML': 'HTML',
      '/CSS': 'CSS',
      '/JS': 'JavaScript',
      '/PYTHON': 'Python',
    };

    // Get the title based on the current path
    const title = titleMap[location.pathname];
    if (title === 'Home' || title === 'Landing') {
      document.title = title;
    } else {
      document.title = `Tutorial: ${title}`; // This is where we change the title
    }
  }, [location]); // everytime location changes
}

export default App;
