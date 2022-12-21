import './App.css';

import {  BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Home'
import Description  from './Description';

function App() {

  return (
    <div>
      <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />

       </Routes>
      </Router>
    </div>
  );
 
}

export default App;
