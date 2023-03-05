import React from "react";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
export default function LayoutTable({ children }) {
  return (
    <Grid item xs={12} >
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        {children}
      </Paper>
    </Grid>
  );
}
