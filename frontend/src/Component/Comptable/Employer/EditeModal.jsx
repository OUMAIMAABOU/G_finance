import React from "react";
import { Modal, Button, Box } from "@material-ui/core";
import { Body, inputBody } from "./Body";
import { getModalStyle, useStyles } from "../../../Tools/model";
import { Put } from "../../../Api/Mutation/MutationEmployer";
import { useMutation } from "@apollo/client";

export default function EditeModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [employes, setEmploye] = React.useState({});
  const [UpdateEmployer, { data, error }] = useMutation(Put);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setEmploye(props.Employer);
    console.log(props.Employer);
  }, [props.Employer]);

  const onchange = (e) => {
    setEmploye(() => ({
      ...setEmploye,
      [e.target.name]: e.target.value,
    }));
  };
  function handleSubmit(e) {
    try {
      e.preventDefault();
      UpdateEmployer({
        variables: {
      name: employes.name,
      email: employes.email,
      cin: employes.cin,
      dateNaissance: employes.dateNaissance,
      dataEmbauche: employes.dataEmbauche,
      situationFamiliale: employes.situationFamiliale,
      adress: employes.adress,
      nCimr: employes.nCimr,
      nCnss: employes.nCnss,
      service: employes.service,
      fonction: employes.fonction,
      siegeSocial: employes.siegeSocial,
      matricule: employes.matricule,
      role: employes.role,
        },
      }).then((res) => {
        console.log(data);
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Edite
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Edite Employer</h2>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex" }}>
              <Body
                nameInput="name"
                title="Name"
                EventOnChange={onchange}
                Value={employes.name}
              />
              <Body
                nameInput="cin"
                title="CIN"
                EventOnChange={onchange}
                Value={employes.cin}
              />
              <Body
                nameInput="email"
                title="Email"
                type="email"
                EventOnChange={onchange}
                Value={employes.email}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Body
                nameInput="adress"
                title="adress"
                EventOnChange={onchange}
                Value={employes.adress}
              />
              <Body
                nameInput="service"
                title="service"
                EventOnChange={onchange}
                Value={employes.Service}
              />
              <Body
                nameInput="fonction"
                title="fonction"
                EventOnChange={onchange}
                Value={employes.fonction}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Body
                nameInput="siegeSocial"
                title="Siege Social"
                EventOnChange={onchange}
                // InputValue={Employer.siegeSocial}
                Value={employes.siege_social}
              />
              <Body
                nameInput="role"
                title="role"
                EventOnChange={onchange}
                InputValue="comptable"
              />
              <Body
                nameInput="nCimr"
                title="CIMR"
                EventOnChange={onchange}
                // InputValue={employes.nCimr}
                Value={employes.N_CIMR}
              />
            </Box>

            <Box sx={{ display: "flex" }}>
              <Body
                nameInput="nCnss"
                title="CNSS"
                EventOnChange={onchange}
                // InputValue={Employer.nCnss}
                Value={employes.N_CNSS}
              />
              <Body
                nameInput="matricule"
                title="Matricule"
                EventOnChange={onchange}
                // InputValue={Employer.matricule}
                Value={employes.matricule}
              />
              <Body
                nameInput="situationFamiliale"
                title="Situation Familiale"
                EventOnChange={onchange}
                // InputValue={Employer.situationFamiliale}
                Value={employes.situation_familiale}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <lable> date de Naissance</lable>
              <Body
                type="date"
                EventOnChange={onchange}
                // InputValue={Employer.dateNaissance}
                Value={props.date_naissance}
              />
              <lable>data Embauche</lable>
              <Body
                EventOnChange={onchange}
                type="date"
                // InputValue={Employer.dataEmbauche}
                Value={employes.data_embauche}
              />
            </Box>

            <Button type="submit" variant="outlined">
              Save
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
