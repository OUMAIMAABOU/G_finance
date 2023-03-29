import "./App.css";
import LayoutDashboard from "./Component/Comptable/Dashboard/LayoutDashboard";
import Employer from "./Pages/Comptable/Employer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Component/Authentification/login'
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employer" element={<Employer />} />
     
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
