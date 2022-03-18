
// import './App.css';
import Home from './components/Index';
import MoviePage from './pages/MoviePage';
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase";
// import Login from './components/Login';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  // const [user, loading] = useAuthState(auth);
  // const user = true;

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
