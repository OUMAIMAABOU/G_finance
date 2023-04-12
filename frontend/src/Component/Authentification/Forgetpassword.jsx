import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { FORGET_PASSWORD } from "../../Api/Mutation/MutationAuth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useMutation, ApolloError } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function ForgetPassword() {
  const [foregetPassword, { error }] = useMutation(FORGET_PASSWORD);
  const [Input, setInput] = React.useState({ email: "" });
  const [errors, setError] = React.useState("");
  const [verification, setVerification] = React.useState(false);
  const onchange = (event) => {
    setInput(() => ({
      ...Input,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      foregetPassword({
        variables: {
          email: Input.email,
        },
      })
        .then((res) => {
          setVerification(res.data.foregetPassword);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    } catch (error) {
      setError(ApolloError);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forget Password{" "}
          </Typography>
          {verification && <>
          <Box sx={{color:"red"}}>{verification}</Box>
          </>}
          <form onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* <Box>{errors && <p>{error}</p>}</Box> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onchange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
