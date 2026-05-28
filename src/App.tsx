import { Navigate, Route, Routes } from 'react-router-dom';
import MapPage from './pages/MapPage';
import TempleDetailPage from './pages/TempleDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route path="/temple/:id" element={<TempleDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
