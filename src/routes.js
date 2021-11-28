import { Routes, Route } from 'react-router-dom';
import Gallery from './gallery_page';
import Home from './home';

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
