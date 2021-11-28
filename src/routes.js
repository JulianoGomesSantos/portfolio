import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Home from './home';
import NotFoundPage from './notFoundPage';

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
