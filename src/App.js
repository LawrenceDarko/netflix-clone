
// import './App.css';
import Home from './components/Index';
import MoviePage from './pages/MoviePage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/browse" element={<MoviePage />} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
