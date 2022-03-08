import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Buttons } from './pages/Buttons';
import { Colleen } from './pages/Colleen';

// import your page here and make a route for it below :)

function App() {
  return (

    <div className="App">

      <Router>
          <Routes>
              <Route path="/" element={<Buttons />} />
              <Route path="/colleen" element={<Colleen />} />
              {/* <Route path="/hh" element={<HH />} />
              <Route path="/jz" element={<JZ />} />
              <Route path="/jc" element={<JC />} />
              <Route path="/mt" element={<MT />} />
              <Route path="/cm" element={<CM />} />
              <Route path="/ay" element={<AY />} /> */}
          </Routes>
      </Router>

    </div>
  );
}

export default App;
