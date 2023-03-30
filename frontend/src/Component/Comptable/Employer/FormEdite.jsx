import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Body, inputBody } from "./Body";
import { useMutation, ApolloError } from "@apollo/client";
import { Add } from "../../../Api/Mutation/MutationEmployer";

export default function FormEdite(props) {
  const [AddEmployer, { data, error }] = useMutation(Add);
  const [Employer, SetEmployer] = useState({});
  const onchange = (e) => {
    SetEmployer(() => ({
      ...Employer,
      [e.target.name]: e.target.value,
    }));
  };
  function handleSubmit(e) {
    try {
      e.preventDefault();
      AddEmployer({
        variables: {
          name: Employer.name,
          email: Employer.email,
          cin: Employer.cin,
          dateNaissance: Employer.dateNaissance,
          dataEmbauche: Employer.dataEmbauche,
          situationFamiliale: Employer.situationFamiliale,
          adress: Employer.adress,
          nCimr: Employer.nCimr,
          nCnss: Employer.nCnss,
          service: Employer.service,
          fonction: Employer.fonction,
          siegeSocial: Employer.siegeSocial,
          matricule: Employer.matricule,
          role: Employer.role,
        },
      }).then((res) => {
        console.log(data);
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex" }}>
        <Body
          nameInput="name"
          title="Name"
          EventOnChange={onchange}
          InputValue={Employer.name}
          Value={props.name}
        />
        <Body
          nameInput="cin"
          title="CIN"
          EventOnChange={onchange}
          InputValue={Employer.cin}
          Value={props.cin}
        />
        <Body
          nameInput="email"
          title="Email"
          type="email"
          EventOnChange={onchange}
          InputValue={Employer.email}
          Value={props.email}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Body
          nameInput="phoneNumber"
          title="Phone"
          EventOnChange={onchange}
          Value={props.phone}
        />
        <Body
          nameInput="adress"
          title="adress"
          EventOnChange={onchange}
          InputValue={Employer.adress}
          Value={props.address}
        />
        <Body
          nameInput="service"
          title="service"
          EventOnChange={onchange}
          InputValue={Employer.service}
          Value={props.service}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Body
          nameInput="fonction"
          title="fonction"
          EventOnChange={onchange}
          InputValue={Employer.fonction}
          Value={props.fonction}
        />
        <Body
          nameInput="siegeSocial"
          title="Siege Social"
          EventOnChange={onchange}
          InputValue={Employer.siegeSocial}
          Value={props.siegeSocial}
        />
        <Body
          nameInput="role"
          title="role"
          EventOnChange={onchange}
          InputValue="comptable"
        />
      </Box>

      <Box sx={{ display: "flex" }}>
        <Body
          nameInput="nCimr"
          title="CIMR"
          EventOnChange={onchange}
          InputValue={Employer.nCimr}
          Value={props.nCimr}
        />
        <Body
          nameInput="nCnss"
          title="CNSS"
          EventOnChange={onchange}
          InputValue={Employer.nCnss}
          Value={props.nCnss}
        />
        <Body
          nameInput="matricule"
          title="Matricule"
          EventOnChange={onchange}
          InputValue={Employer.matricule}
          Value={props.matricul}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Body
          nameInput="situationFamiliale"
          title="Situation Familiale"
          EventOnChange={onchange}
          InputValue={Employer.situationFamiliale}
          Value={props.situationFamiliale}
        />
        <Body
          nameInput="dateNaissance"
          title="date Naissance"
          type="date"
          EventOnChange={onchange}
          InputValue={Employer.dateNaissance}
          Value={props.dateNaissance}
        />
        <Body
          nameInput="dataEmbauche"
          EventOnChange={onchange}
          type="date"
          InputValue={Employer.dataEmbauche}
          Value={props.dataEmbauche}
        />
      </Box>

      <Button type="submit" variant="outlined">
        Outlined
      </Button>
    </form>
  );
}
