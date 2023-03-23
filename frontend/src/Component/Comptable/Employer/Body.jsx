import React from "react";
import { FormControl, InputLabel, Input } from "@mui/material";
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

      />
    </FormControl>
  );
}

// export function button({props,handleClick}) {
//   return (
//     <FormControl sx={{ margin: 1 }}>
//       <InputLabel htmlFor="my-input">{props.title}</InputLabel>
//       <Input
//         id="my-input"
//         name={props.nameInput}
//         aria-describedby="my-helper-text"
//         type={props.type}
//         onChange={handleClick}
//         value={props.InputValue}
//       />
//     </FormControl>
//   );
// }
