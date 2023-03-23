import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Body } from "./Body";
import { useMutation, ApolloError } from "@apollo/client";
import { Add } from "../../../Api/Mutation/MutationEmployer";
export default function Form() {
  const [AddEmployer, { data, error }] = useMutation(Add);
  const [Employer, SetEmployer] = useState({
    name: "",
    email: "",
    cin: "",
    dateNaissance: "",
    dataEmbauche: "",
    situationFamiliale: "",
    adress: "",
    nCimr: "",
    nCnss: "",
    service: "",
    fonction: "",
    siegeSocial: "",
    matricule: "",
    role: "",
  });
  const onchange = (e) => {
    SetEmployer(() => ({
      ...Employer,
      [e.target.name]: e.target.value,
    }));
    console.log(Employer);
  };
  console.log(Employer);
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
      console.log(Employer);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex" }}>
          <Body
            nameInput="name"
            title="Name"
            EventOnChange={onchange}
            InputValue={Employer.name}
          />
          <Body
            nameInput="cin"
            title="CIN"
            EventOnChange={onchange}
            InputValue={Employer.cin}
          />
          <Body
            nameInput="email"
            title="Email"
            type="email"
            EventOnChange={onchange}
            InputValue={Employer.email}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Body
            nameInput="phoneNumber"
            title="Phone"
            EventOnChange={onchange}
          />
          <Body
            nameInput="adress"
            title="adress"
            EventOnChange={onchange}
            InputValue={Employer.adress}
          />
          <Body
            nameInput="service"
            title="service"
            EventOnChange={onchange}
            InputValue={Employer.service}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Body
            nameInput="fonction"
            title="fonction"
            InputValue={Employer.fonction}
          />
          <Body
            nameInput="siegeSocial"
            title="Siege Social"
            InputValue={Employer.siegeSocial}
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
          />
          <Body
            nameInput="nCnss"
            title="CNSS"
            EventOnChange={onchange}
            InputValue={Employer.nCnss}
          />
          <Body
            nameInput="matricule"
            title="Matricule"
            EventOnChange={onchange}
            InputValue={Employer.matricule}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Body
            nameInput="situationFamiliale"
            title="Situation Familiale"
            EventOnChange={onchange}
            InputValue={Employer.situationFamiliale}
          />
          <Body
            nameInput="dateNaissance"
            title="date Naissance"
            type="date"
            EventOnChange={onchange}
            InputValue={Employer.dateNaissance}
          />
          <Body
            nameInput="dataEmbauche"
            title="date Embauche"
            type="date"
            EventOnChange={onchange}
            InputValue={Employer.dataEmbauche}
          />
        </Box>

        <Button type="submit" variant="outlined">
          Outlined
        </Button>
      </form>
    </>
  );
}
