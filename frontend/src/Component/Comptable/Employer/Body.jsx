import React from "react";
import { FormControl, InputLabel, Input,TextField } from "@mui/material";
export function Body(props) {
  return (
    <FormControl sx={{ margin: 1 }}>
      <InputLabel htmlFor="my-input">{props.title}</InputLabel>
      <Input
        id="my-input"
        name={props.nameInput}
        // label={props.title}
        aria-describedby="my-helper-text"
        type={props.type}
        onChange={props.EventOnChange}
        value={props.Value}

      />
    </FormControl>
  );
}

export function inputBody(props) {
  return (
    <TextField
              margin="normal"
              required
              id="email"
              label={props.title}
              name={props.nameInput}
              type={props.type}
              autoFocus
              value={props.valueInput}
              onChange={props.EventOnChange}

            />
  );
}
