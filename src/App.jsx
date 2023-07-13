import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/login/login.jsx";
import Dashboard from "./page/dashboard/dashboard.jsx";
import NotFound from "./page/not-found/not_found.jsx";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
