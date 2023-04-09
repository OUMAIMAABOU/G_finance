import * as React from "react";
import {Toolbar,List,Divider,IconButton,Typography,Badge} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./listItems";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NavBar, Drawer } from "../../../Tools/SideBar";
import { UserContext } from "../../../Context/UseContext";


export default function SideBar() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { value, setValue } =React.useContext(UserContext);
  setValue(localStorage.getItem("username"));
 return (
    <>
      <NavBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
            background: "#1939DA",
            color: "#EAEBED",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />

          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <Typography sx={{
            marginRight:2
          }}>
             Welcome {value}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </NavBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          background: "#768CFE",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
            background: "#768CFE",
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List
          sx={{
            background: "#768CFE",
            display: "flex",
            flexDirection: "column",
          }}
          component="nav"
        >
          {mainListItems}
        </List>
        {/* <List>{mainListItems}</List> */}
      </Drawer>
    </>
  );
}
