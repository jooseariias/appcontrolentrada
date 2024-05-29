import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login'; 
import QRCodeComponent from '@/pages/QRCodeComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/QRCodeComponent" element={<QRCodeComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
