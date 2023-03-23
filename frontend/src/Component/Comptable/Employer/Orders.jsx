import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  Button,
} from "@mui/material";
import Title from "../Dashboard/Title";
import { GET_EMPLOYER } from "../../../Api/Query/Query";
import { useQuery, useMutation } from "@apollo/client";
import { Box } from "@mui/material";
import Modal from "./Modal";
import {DELETE} from '../../../Api/Mutation/MutationEmployer'

export default function Orders() {
  const [deleteEmployer] = useMutation(DELETE);
  const { loading, data, error } = useQuery(GET_EMPLOYER);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>wrong...{error.message}</div>;
  

  const deleteEmployebyId = (deleteEmployerId) => {
    deleteEmployer({
      variables: {
        deleteEmployerId,
      },
    });
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Title>Employer</Title>
        <Modal />
      </Box>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>CIN</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Fonction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.ShowEmployer.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.cin}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.fonction}</TableCell>
             <TableCell>
              <button
                          onClick={() => deleteEmployebyId(row._id)}
                        >delete</button></TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
