import "./App.css";
import * as React from "react"
import LayoutDashboard from "./Component/Comptable/Dashboard/LayoutDashboard";
import Employer from "./Pages/Comptable/Employer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Authentification/login";
import PrivateRouter from "./Router/PrivateRoute";
import { UserContext } from "./Context/UseContext";
function App() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{ value, setValue }}>

        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path="/employer" element={<Employer />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
