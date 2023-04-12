import * as React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Link, useNavigate } from "react-router-dom";
function logOut() {
  localStorage.clear();
}
export const mainListItems = (
  <React.Fragment>
    <Link to="/employer" className="text-dark ">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/employer" className="text-dark ">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Employer" />
      </ListItemButton>
    </Link>
    <Link to="/salaire" className="text-dark ">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Salaire" className="text-dark "/>
      </ListItemButton>
    </Link>
    <Link to="/" onClick={logOut} className="text-dark ">
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="LogOut" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
