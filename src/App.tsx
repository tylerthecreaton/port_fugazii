import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import ReceiveGuest from './components/ReceiveGuest';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/receive-guest" element={<ReceiveGuest />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
