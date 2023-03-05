import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
export default function LayoutForm({ children }) {
  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 700,
          }}
        >
          {children}
        </Paper>
      </Grid>
    </>
  );
}
