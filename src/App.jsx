
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CampPage }from "./pages/CampPage/CampPage";
import {HomePage} from "./pages/HomePage/HomePage"
import { NewsDetailPage } from './pages/NewsDetailPage/NewsDetailPage';
import { EventPage } from "./pages/EventPage/EventPage";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { TicketPage } from "./pages/TicketPage/TicketPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainLayout } from "./layout/MainLayout";
import { LineUpPage } from "./pages/LineUpPage/LineUpPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="forside" element={<HomePage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="events" element={<EventPage />} />
          <Route path="/line-up" element={<LineUpPage />} />
          <Route path="camps" element={<CampPage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="billetter" element={<TicketPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
