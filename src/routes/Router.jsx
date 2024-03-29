import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/404/NotFound';
import Reservation from '../pages/reservation/Reservation';
import Home from '../pages/home/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
