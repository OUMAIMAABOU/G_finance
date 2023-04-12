import "./App.css";
import * as React from "react"
import LayoutDashboard from "./Component/Comptable/Dashboard/LayoutDashboard";
import Employer from "./Pages/Comptable/Employer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Authentification/login";
import ForgetPassword from "./Component/Authentification/Forgetpassword";
import PrivateRouter from "./Router/PrivateRoute";
import { UserContext } from "./Context/UseContext";
import CalculerSalaire from "./Component/Comptable/Salaire.jsx/CalculerSalaire";

function App() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{ value, setValue }}>

        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path="/employer" element={<Employer />} />
            <Route path="/salaire" element={<CalculerSalaire />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/forget" element={<ForgetPassword />} />

        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
