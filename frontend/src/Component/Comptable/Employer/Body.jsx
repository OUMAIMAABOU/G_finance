import React from "react";
import { FormControl, InputLabel, Input,TextField } from "@mui/material";
export function Body(props) {
  return (
    <FormControl sx={{ margin: 1 }}>
      <InputLabel htmlFor="my-input">{props.title}</InputLabel>
      <Input
        id="my-input"
        name={props.nameInput}
        aria-describedby="my-helper-text"
        type={props.type}
        onChange={props.EventOnChange}
        value={props.valueInput}

      />
    </FormControl>
  );
}

export function Date(props) {
  return (
    <TextField
    id="outlined-controlled"
    label="Controlled"
    name={props.nameInput}
    type="date"
    value={props.value}
    onChange={props.EventOnChange}

  />
  );
}
