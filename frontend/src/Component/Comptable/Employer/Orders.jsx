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
import { DELETE } from "../../../Api/Mutation/MutationEmployer";
import EditeModal from "./EditeModal";
export default function Orders() {
  const [sendData, SetsendData] = React.useState({
    id: "",
    name: "",
    cin: "",
  });
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
            <TableCell>Email</TableCell>
            <TableCell>Fonction</TableCell>
            <TableCell>Matricule</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.ShowEmployer.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.cin}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.fonction}</TableCell>
         
               <Button onClick={() => SetsendData(row)}>
                  <EditeModal Employer={sendData} />
              </Button>
              <TableCell>
                <Button onClick={() => deleteEmployebyId(row._id)}>
                  drop
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
