import { Routes, Route } from 'react-router-dom';
import Gallery from './dashboard';
import Home from './home';
import NotFoundPage from './notFoundPage';

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
