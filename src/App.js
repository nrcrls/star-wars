import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Spaceships from './pages/Spaceships';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/ships" element={<Spaceships />} />
      </Routes>
    </>
  );
}

export default App;
